import React from 'react'
import { ActivityIndicator } from 'react-native'

import { NotFoundContainer } from 'packages/main/main.styles'
import { PageContainer } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'

const MatchesLoadingPage: React.FC = () => {
  const { theme } = useToggleThemeContext()

  return (
    <PageContainer>
      <NotFoundContainer>
        <ActivityIndicator size={44} color={theme.purple} />
      </NotFoundContainer>
    </PageContainer>
  )
}

export default MatchesLoadingPage
