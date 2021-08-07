import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import AboutProjectPage from 'packages/about-project'
import { MainContextProvider } from 'packages/main/context'
import Settings from 'packages/main/settings'
import TargetProfile from 'packages/main/target-profile'
import TargetProfileCustomReportPage from 'packages/main/target-profile/components/CustomReportPage'
import OnBoarding from 'packages/onboarding'
import { OnBoardingContextProvider } from 'packages/onboarding/context'

import MainTabNavigation from '../tabs/main'

import StackNavigation from '../components/StackNavigation'
import { AUTHENTICATED_ROUTES } from '../constants'
import EditAuthUserScreens from './edit-auth-user'

const { Screen } = createStackNavigator()

const AuthenticatedNavigation: React.FC = () => {
  return (
    <MainContextProvider>
      <OnBoardingContextProvider>
        <StackNavigation>
          <Screen
            name={AUTHENTICATED_ROUTES.MAIN}
            component={MainTabNavigation}
          />
          <Screen name={AUTHENTICATED_ROUTES.SETTINGS} component={Settings} />
          <Screen
            name={AUTHENTICATED_ROUTES.ONBOARDING}
            initialParams={{ endRoute: AUTHENTICATED_ROUTES.SETTINGS }}
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
            name={AUTHENTICATED_ROUTES.EDIT_AUTH_USER}
            component={EditAuthUserScreens}
          />
        </StackNavigation>
      </OnBoardingContextProvider>
    </MainContextProvider>
  )
}

export default AuthenticatedNavigation
