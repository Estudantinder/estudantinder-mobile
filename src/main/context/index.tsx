import React, { FC } from 'react'

import { AuthContextProvider } from './auth'

const AppProvider: FC = ({ children }) => (
  <AuthContextProvider>{children}</AuthContextProvider>
)

export { SignUpContextProvider } from './sign-up'
export { StudentsContextProvider } from './students'

export default AppProvider
