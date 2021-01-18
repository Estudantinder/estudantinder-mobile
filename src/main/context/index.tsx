import React, { FC } from 'react'

import { AuthContextProvider } from './auth'
import { SignUpContextProvider } from './sign-up'
import { StudentsContextProvider } from './students'

const AppProvider: FC = ({ children }) => (
  <AuthContextProvider>
    <StudentsContextProvider>
      <SignUpContextProvider>{children}</SignUpContextProvider>
    </StudentsContextProvider>
  </AuthContextProvider>
)

export default AppProvider
