import React, { FC } from 'react'

import { SignUpContextProvider } from './sign-up'

const AppProvider: FC = ({ children }) => (
  <SignUpContextProvider>{children}</SignUpContextProvider>
)

export default AppProvider
