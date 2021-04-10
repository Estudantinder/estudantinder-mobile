import React, { RefObject } from 'react'
import { ActivityIndicator } from 'react-native'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'

import { NotFoundContainer } from 'packages/main/main.styles'
import { PageContainer } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'

import HomeTopBar from '../components/Topbar'

export interface HomeLoadingPageProps {
  drawerRef: RefObject<DrawerLayout>
}

const HomeLoadingPage: React.FC<HomeLoadingPageProps> = (props) => {
  const openDrawer = () => props.drawerRef.current?.openDrawer()

  const { theme } = useToggleThemeContext()

  return (
    <PageContainer withoutPadding style={{ paddingTop: 0 }}>
      <HomeTopBar onFiltersPressed={openDrawer} />

      <NotFoundContainer>
        <ActivityIndicator size={44} color={theme.base.purple} />
      </NotFoundContainer>
    </PageContainer>
  )
}

export default HomeLoadingPage
