import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { SignUpContextProvider } from 'main/context'

import Landing from 'views/pages/Landing'
import Login from 'views/pages/Login'
import Contacts from 'views/pages/sign-up/Contacts'
import Details from 'views/pages/sign-up/Details'
import Person from 'views/pages/sign-up/Person'
import SignUpPhotos from 'views/pages/sign-up/Photos'
import School from 'views/pages/sign-up/School'
import Secrets from 'views/pages/sign-up/Secrets'
import SignUpProfile from 'views/pages/sign-up/SignUpProfile'

import Navigation from './Navigation'

const { Screen } = createStackNavigator()

const SignNavigation: React.FC = () => {
  return (
    <SignUpContextProvider>
      <Navigation>
        <Screen name="Landing" component={Landing} />
        <Screen name="Login" component={Login} />

        <Screen name="sign-up/Secrets" component={Secrets} />
        <Screen name="sign-up/Person" component={Person} />
        <Screen name="sign-up/School" component={School} />
        <Screen name="sign-up/Contacts" component={Contacts} />
        <Screen name="sign-up/Details" component={Details} />
        <Screen name="sign-up/Photos" component={SignUpPhotos} />
        <Screen name="sign-up/Profile" component={SignUpProfile} />
      </Navigation>
    </SignUpContextProvider>
  )
}

export default SignNavigation
