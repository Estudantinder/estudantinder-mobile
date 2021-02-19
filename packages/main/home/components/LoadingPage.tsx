import React from 'react'
import { ActivityIndicator } from 'react-native'

import { PageContainer } from 'packages/styles'
import theme from 'packages/styles/theme'

import { HomeNoStudentContainer } from '../home.styles'
import HomeTopBar from './Topbar'

const HomeLoadingPage: React.FC = () => {
  return (
    <PageContainer withoutPadding style={{ paddingTop: 0 }}>
      <HomeTopBar />

      <HomeNoStudentContainer>
        <ActivityIndicator size={44} color={theme.colors.primary.purple} />
      </HomeNoStudentContainer>
    </PageContainer>
  )
}

export default HomeLoadingPage
