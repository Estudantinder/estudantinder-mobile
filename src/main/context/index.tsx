import React, { FC } from 'react'

import { AuthContextProvider } from './auth'
import { SignUpContextProvider } from './sign-up'

const AppProvider: FC = ({ children }) => (
  <AuthContextProvider>
    <SignUpContextProvider>{children}</SignUpContextProvider>
  </AuthContextProvider>
)

export default AppProvider
