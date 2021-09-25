import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { EditAuthUserContextProvider } from 'packages/edit-auth-user/context'
import EditAuthUserAbout from 'packages/edit-auth-user/pages/EditUserAbout'
import EditAuthUserContacts from 'packages/edit-auth-user/pages/EditUserContacts'
import EditAuthUserDetails from 'packages/edit-auth-user/pages/EditUserDetails'
import EditAuthUserMenu from 'packages/edit-auth-user/pages/EditUserMenu'
import EditAuthUserPhotos from 'packages/edit-auth-user/pages/EditUserPhotos'
import EditAuthUserSchool from 'packages/edit-auth-user/pages/EditUserSchool'
import EditAuthUserSecrets from 'packages/edit-auth-user/pages/EditUserSecrets'

import { EDIT_AUTH_USER_ROUTES } from '../constants'

export type EditAuthUserPageParamsProps = {
  [EDIT_AUTH_USER_ROUTES.ABOUT]: undefined
  [EDIT_AUTH_USER_ROUTES.CONTACTS]: undefined
  [EDIT_AUTH_USER_ROUTES.DETAILS]: undefined
  [EDIT_AUTH_USER_ROUTES.MENU]: undefined
  [EDIT_AUTH_USER_ROUTES.PHOTOS]: undefined
  [EDIT_AUTH_USER_ROUTES.SCHOOL]: undefined
  [EDIT_AUTH_USER_ROUTES.SECRETS]: undefined
}

const { Screen, Navigator } =
  createNativeStackNavigator<EditAuthUserPageParamsProps>()

const EditAuthUserScreens: React.FC = () => {
  return (
    <EditAuthUserContextProvider>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name={EDIT_AUTH_USER_ROUTES.MENU}
          component={EditAuthUserMenu}
        />
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
        <Screen
          name={EDIT_AUTH_USER_ROUTES.PHOTOS}
          component={EditAuthUserPhotos}
        />
      </Navigator>
    </EditAuthUserContextProvider>
  )
}

export default EditAuthUserScreens
