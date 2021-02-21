import { useNavigation } from '@react-navigation/native'
import React, { RefObject, useCallback, useState } from 'react'
import { Image, RefreshControl } from 'react-native'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'

import PrimaryButton from 'packages/components/PrimaryButton'
import Scroll from 'packages/components/Scroll'
import { useMainContext } from 'packages/main/context'
import {
  NotFoundContainer,
  NotFoundSubTitle,
  NotFoundTitle,
} from 'packages/main/main.styles'
import { MAIN_ROUTES } from 'packages/router/constants'
import { PageContainer } from 'packages/styles'
import theme from 'packages/styles/theme'

import NoStudents from '../../assets/not_found.png'
import HomeTopBar from '../components/Topbar'

export interface HomeNoStudentPageProps {
  drawerRef: RefObject<DrawerLayout>
}

const HomeNoStudentPage: React.FC<HomeNoStudentPageProps> = (props) => {
  const [refreshing, setRefreshing] = useState(false)

  const router = useNavigation()

  const { reloadAllStudents } = useMainContext()

  const onRefresh = useCallback(() => {
    let isRendered = true

    setRefreshing(true)

    reloadAllStudents().then(() => {
      if (isRendered) setRefreshing(false)
    })

    return () => (isRendered = false)
  }, [reloadAllStudents])

  const openDrawer = () => props.drawerRef.current?.openDrawer()

  const navigateToMatches = () => router.navigate(MAIN_ROUTES.MATCHES)

  return (
    <PageContainer withoutPadding style={{ paddingTop: 0 }}>
      <Scroll
        scrollEnabled={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme.colors.primary.purple, theme.colors.primary.green]}
            size={36}
          />
        }
      >
        <HomeTopBar onFiltersPressed={openDrawer} />

        <NotFoundContainer>
          <Image source={NoStudents} />

          <NotFoundTitle>Você viu todo mundo por enquanto!</NotFoundTitle>
          <NotFoundSubTitle>
            Acesse os Matches para ver sua lista de curtidas ou altere os seus
            filtros para ver mais estudantes.
          </NotFoundSubTitle>

          <PrimaryButton
            containerStyle={{ width: '50%', height: 36, marginTop: 8 }}
            onPress={navigateToMatches}
          >
            VER MATCHES
          </PrimaryButton>
        </NotFoundContainer>
      </Scroll>
    </PageContainer>
  )
}

export default HomeNoStudentPage
