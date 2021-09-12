import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import AboutProjectPage from 'packages/about-project'
import { MainContextProvider } from 'packages/main/context'
import Settings from 'packages/main/settings'
import TargetProfile from 'packages/main/target-profile'
import TargetProfileCustomReportPage from 'packages/main/target-profile/components/CustomReportPage'
import TargetProfileReportSuccessPage from 'packages/main/target-profile/components/ReportSuccessPage'
import OnBoarding from 'packages/onboarding'
import { useOnBoardingContext } from 'packages/onboarding/context'

import MainTabNavigation from '../tabs/main'

import StackNavigation from '../components/StackNavigation'
import { AUTHENTICATED_ROUTES } from '../constants'
import EditAuthUserScreens from './edit-auth-user'

const { Screen } = createStackNavigator()

const LoadingComponent = () => <View />

const AuthenticatedNavigation: React.FC = () => {
  const { getOnBoardingHasViewed } = useOnBoardingContext()
  const [hasViewed, setHasViewed] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fn = async () => {
      setHasViewed(await getOnBoardingHasViewed())
      setLoading(false)
    }

    fn()
  }, [getOnBoardingHasViewed])

  if (loading)
    return (
      <StackNavigation>
        <Screen name="loading" component={LoadingComponent} />
      </StackNavigation>
    )

  const getInitialPage = () => {
    if (hasViewed) return AUTHENTICATED_ROUTES.MAIN

    return AUTHENTICATED_ROUTES.ONBOARDING
  }

  return (
    <MainContextProvider>
      <StackNavigation initialPage={getInitialPage()}>
        <Screen
          name={AUTHENTICATED_ROUTES.MAIN}
          component={MainTabNavigation}
        />
        <Screen name={AUTHENTICATED_ROUTES.SETTINGS} component={Settings} />
        <Screen
          name={AUTHENTICATED_ROUTES.ONBOARDING}
          initialParams={{
            endRoute: hasViewed
              ? AUTHENTICATED_ROUTES.SETTINGS
              : AUTHENTICATED_ROUTES.MAIN,
          }}
          component={OnBoarding}
        />
        <Screen
          name={AUTHENTICATED_ROUTES.ABOUT_PROJECT}
          initialParams={{ endRoute: AUTHENTICATED_ROUTES.ABOUT_PROJECT }}
          component={AboutProjectPage}
        />
        <Screen
          name={AUTHENTICATED_ROUTES.TARGET_PROFILE}
          component={TargetProfile}
        />
        <Screen
          name={AUTHENTICATED_ROUTES.CUSTOM_REPORT}
          component={TargetProfileCustomReportPage}
        />
        <Screen
          name={AUTHENTICATED_ROUTES.REPORT_SUCCESS}
          component={TargetProfileReportSuccessPage}
        />
        <Screen
          name={AUTHENTICATED_ROUTES.EDIT_AUTH_USER}
          component={EditAuthUserScreens}
        />
      </StackNavigation>
    </MainContextProvider>
  )
}

export default AuthenticatedNavigation
