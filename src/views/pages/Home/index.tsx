import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Feather, AntDesign } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

import { useStudentsContext } from 'main/context/students'
import Student from 'main/entities/Student'

import LogoWhite from 'views/assets/logo_white.png'
import Card from 'views/components/organisms/Card'
import FilterDrawer from 'views/components/organisms/FilterDrawer'
import triggerCorrectAlert from 'views/utils/triggerCorrectAlert'

import Styled from './styles'

export default function Home() {
  const { students, likeStudent, reloadStudents } = useStudentsContext()

  const [drawerOpen, setDrawerOpen] = useState(false)

  const [student, setStudent] = useState<Student>()

  const router = useNavigation()

  useEffect(() => {
    setStudent(students[0])
  }, [students])

  useEffect(() => {
    reloadStudents()
  }, [reloadStudents])

  if (!student) {
    return (
      <View>
        <Text>Sem estudante...</Text>
      </View>
    )
  }

  const handleNavigateToSettings = () => {
    router.navigate('Settings')
  }

  const handleLikeStudent = async () => {
    try {
      await likeStudent(student.id)
    } catch (error) {
      triggerCorrectAlert(error)
    }
  }

  return (
    <Styled.Container>
      <StatusBar style="light" backgroundColor="rgba(0,0,0, .4)" />

      <Styled.TopBar>
        <BorderlessButton onPress={handleNavigateToSettings}>
          <Feather name="settings" color="#fff" size={24} />
        </BorderlessButton>

        <Image source={LogoWhite} resizeMode="contain" />

        <BorderlessButton onPress={() => setDrawerOpen(true)}>
          <Feather name="filter" color="#fff" size={24} />
        </BorderlessButton>
      </Styled.TopBar>

      <Styled.Main>
        <Card student={student} />

        <Styled.ButtonsContainer>
          <Styled.Button onPress={handleLikeStudent}>
            <AntDesign name="like1" color="#37C77F" size={32} />
          </Styled.Button>

          <Styled.Button>
            <AntDesign name="dislike1" color="#ff3b83" size={32} />
          </Styled.Button>
        </Styled.ButtonsContainer>
      </Styled.Main>

      <FilterDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </Styled.Container>
  )
}
