import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { EditAuthUserContextProvider } from 'packages/edit-auth-user/context'
import EditAuthUserAbout from 'packages/edit-auth-user/pages/EditUserAbout'
import EditAuthUserContacts from 'packages/edit-auth-user/pages/EditUserContacts'
import EditAuthUserDetails from 'packages/edit-auth-user/pages/EditUserDetails'
import EditAuthUserSchool from 'packages/edit-auth-user/pages/EditUserSchool'
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
        <Screen
          name={EDIT_AUTH_USER_ROUTES.ABOUT}
          component={EditAuthUserAbout}
        />
        <Screen
          name={EDIT_AUTH_USER_ROUTES.SCHOOL}
          component={EditAuthUserSchool}
        />
        <Screen
          name={EDIT_AUTH_USER_ROUTES.CONTACTS}
          component={EditAuthUserContacts}
        />
        <Screen
          name={EDIT_AUTH_USER_ROUTES.DETAILS}
          component={EditAuthUserDetails}
        />
      </Navigator>
    </EditAuthUserContextProvider>
  )
}

export default EditAuthUserScreens
