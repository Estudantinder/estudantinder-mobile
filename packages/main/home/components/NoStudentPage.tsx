import React, { useCallback, useState } from 'react'
import { Image, RefreshControl } from 'react-native'

import PrimaryButton from 'packages/components/PrimaryButton'
import Scroll from 'packages/components/Scroll'
import { useMainContext } from 'packages/main/context'
import { PageContainer } from 'packages/styles'
import theme from 'packages/styles/theme'

import NoStudents from '../assets/no_students.png'
import {
  HomeNoStudentContainer,
  HomeNoStudentSubTitle,
  HomeNoStudentTitle,
} from '../home.styles'
import HomeTopBar from './Topbar'

const HomeNoStudentPage: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false)

  const { resetStudents } = useMainContext()

  const onRefresh = useCallback(() => {
    setRefreshing(true)

    resetStudents().then(() => setRefreshing(false))
  }, [])

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
        <HomeTopBar />

        <HomeNoStudentContainer>
          <Image source={NoStudents} />

          <HomeNoStudentTitle>
            Você viu todo mundo por enquanto!
          </HomeNoStudentTitle>
          <HomeNoStudentSubTitle>
            Acesse os Matches para ver sua lista de curtidas ou altere os seus
            filtros para ver mais estudantes.
          </HomeNoStudentSubTitle>

          <PrimaryButton
            containerStyle={{ width: '50%', height: 36, marginTop: 8 }}
            onPress={() => 0}
          >
            VER MATCHES
          </PrimaryButton>
        </HomeNoStudentContainer>
      </Scroll>
    </PageContainer>
  )
}

export default HomeNoStudentPage
