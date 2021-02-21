import React from 'react'
import { ActivityIndicator } from 'react-native'

import { NotFoundContainer } from 'packages/main/main.styles'
import { PageContainer } from 'packages/styles'
import theme from 'packages/styles/theme'

const MatchesLoadingPage: React.FC = () => {
  return (
    <PageContainer>
      <NotFoundContainer>
        <ActivityIndicator size={44} color={theme.colors.primary.purple} />
      </NotFoundContainer>
    </PageContainer>
  )
}

export default MatchesLoadingPage
