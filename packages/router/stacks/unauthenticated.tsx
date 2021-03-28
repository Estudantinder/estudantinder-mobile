import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import Login from 'packages/auth/pages/Login'
import Landing from 'packages/landing'
import OnBoarding from 'packages/onboarding'
import {
  OnBoardingContextProvider,
  useOnBoardingContext,
} from 'packages/onboarding/context'
import { SignUpContextProvider } from 'packages/sign-up/context'

import StackNavigation from '../components/StackNavigation'
import { UNAUTHENTICATED_ROUTES } from '../constants'
import SignUpScreens from './sign-up'

const { Screen } = createStackNavigator()

const LoadingComponent = () => <View />

const UnauthenticatedNavigation: React.FC = () => {
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
    if (hasViewed) return UNAUTHENTICATED_ROUTES.LANDING

    return UNAUTHENTICATED_ROUTES.ONBOARDING
  }

  return (
    <SignUpContextProvider>
      <StackNavigation initialPage={getInitialPage()}>
        <Screen
          name={UNAUTHENTICATED_ROUTES.ONBOARDING}
          initialParams={{ endRoute: UNAUTHENTICATED_ROUTES.LANDING }}
          component={OnBoarding}
        />

        <Screen name={UNAUTHENTICATED_ROUTES.LANDING} component={Landing} />

        <Screen name={UNAUTHENTICATED_ROUTES.LOGIN} component={Login} />
        <Screen
          name={UNAUTHENTICATED_ROUTES.SIGNUP}
          component={SignUpScreens}
        />
      </StackNavigation>
    </SignUpContextProvider>
  )
}

const WithOnboardingProvider: React.FC = () => {
  return (
    <OnBoardingContextProvider>
      <UnauthenticatedNavigation />
    </OnBoardingContextProvider>
  )
}

export default WithOnboardingProvider
