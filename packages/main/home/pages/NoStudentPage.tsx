import { useNavigation } from '@react-navigation/native'
import React, { RefObject } from 'react'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'

import { useMainHomeContext } from 'packages/main/context/home'
import Main404Page from 'packages/main/pages/404'
import { MAIN_ROUTES } from 'packages/router/constants'

import HomeTopBar from '../components/Topbar'

export interface HomeNoStudentPageProps {
  drawerRef: RefObject<DrawerLayout>
}

const HomeNoStudentPage: React.FC<HomeNoStudentPageProps> = (props) => {
  const router = useNavigation()

  const { reloadAllStudents } = useMainHomeContext()

  const openDrawer = () => props.drawerRef.current?.openDrawer()

  const navigateToMatches = () => router.navigate(MAIN_ROUTES.MATCHES)

  return (
    <Main404Page
      reloadFunction={reloadAllStudents}
      topBar={<HomeTopBar onFiltersPressed={openDrawer} />}
      button={{ onPressed: navigateToMatches, title: 'VER MATCHES' }}
      message={{
        subtitle:
          'Acesse os Matches para ver sua lista de curtidas ou altere os seus filtros para ver mais estudantes.',
        title: 'Você viu todo mundo por enquanto!',
      }}
    />
  )
}

export default HomeNoStudentPage
