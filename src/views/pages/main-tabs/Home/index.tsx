import { useNavigation } from '@react-navigation/native'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { Image, RefreshControl } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Feather, AntDesign } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

import { useStudentsContext } from 'main/context/students'
import Student from 'main/entities/Student'

import LogoWhite from 'views/assets/logo_white.png'
import PrimaryButton from 'views/components/atoms/PrimaryButton'
import Scroll from 'views/components/atoms/Scroll'
import Card from 'views/components/organisms/Card'
import FilterDrawer from 'views/components/organisms/FilterDrawer'
import { Container, Title } from 'views/styles/globalStyles'
import triggerCorrectAlert from 'views/utils/triggerCorrectAlert'

import Styled from './styles'

export default function Home() {
  const {
    students,
    likeStudent,
    dislikeStudent,
    reloadStudents,
  } = useStudentsContext()

  const [drawerOpen, setDrawerOpen] = useState(false)

  const [student, setStudent] = useState<Student>()

  const router = useNavigation()

  useEffect(() => {
    setStudent(students[0])
  }, [students])

  useEffect(() => {
    reloadStudents()
  }, [reloadStudents])

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)

    reloadStudents().then(() => setRefreshing(false))
  }, [reloadStudents])

  const handleNavigateToSettings = () => {
    router.navigate('Settings')
  }

  const handleLikeStudent = async () => {
    if (!student) return

    try {
      await likeStudent(student.id)
    } catch (error) {
      triggerCorrectAlert(error)
    }
  }

  const handleDislikeStudent = async () => {
    if (!student) return

    try {
      await dislikeStudent(student.id)
    } catch (error) {
      triggerCorrectAlert(error)
    }
  }

  return (
    <Styled.Container>
      <Scroll
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <StatusBar style="light" backgroundColor="rgba(0,0,0, .4)" />

        <Styled.TopBar>
          <BorderlessButton onPress={handleNavigateToSettings}>
            <Feather name="settings" color="#fff" size={24} />
          </BorderlessButton>

          <Image source={LogoWhite} resizeMode="contain" />

          <BorderlessButton onPress={() => setDrawerOpen(true)}>
            <Feather name="sliders" color="#fff" size={24} />
          </BorderlessButton>
        </Styled.TopBar>

        <Styled.Main>
          {student ? (
            <Fragment>
              <Card student={student} />

              <Styled.ButtonsContainer>
                <Styled.Button onPress={handleLikeStudent}>
                  <AntDesign name="like1" color="#0FAD58" size={28} />
                </Styled.Button>

                <Styled.Button onPress={handleDislikeStudent}>
                  <AntDesign name="dislike1" color="#C61616" size={28} />
                </Styled.Button>
              </Styled.ButtonsContainer>
            </Fragment>
          ) : (
            <Container>
              <Title>Sem estudante...</Title>

              <PrimaryButton onPress={reloadStudents}>RECARREGAR</PrimaryButton>
            </Container>
          )}
        </Styled.Main>
      </Scroll>

      <FilterDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </Styled.Container>
  )
}
