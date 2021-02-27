import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { EditAuthUserContextProvider } from 'packages/edit-auth-user/context'
import EditAuthUserSecrets from 'packages/edit-auth-user/pages/EditUserSecrets'

import { EDIT_AUTH_USER_ROUTES } from '../constants'

const { Screen, Navigator } = createStackNavigator()

const EditAuthUserScreens: React.FC = () => {
  return (
    <EditAuthUserContextProvider>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name={EDIT_AUTH_USER_ROUTES.SECRETS}
          component={EditAuthUserSecrets}
        />
      </Navigator>
    </EditAuthUserContextProvider>
  )
}

export default EditAuthUserScreens
