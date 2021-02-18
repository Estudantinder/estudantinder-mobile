import React, { useEffect } from 'react'
import { Text } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import Scroll from 'packages/components/Scroll'
import { PageContainer } from 'packages/styles'

import { useMainContext } from '../context'
import StudentCard from './components/StudentCard'
import HomeTopBar from './components/Topbar'
import { HomeButton, HomeButtonsContainer } from './home.styles'

const Home: React.FC = () => {
  const { students, resetStudents } = useMainContext()

  useEffect(() => {
    resetStudents()
  }, [resetStudents])

  if (!students.length)
    return (
      <PageContainer withoutPadding>
        <HomeTopBar />

        <Text>Sem estudantes</Text>
      </PageContainer>
    )

  return (
    <PageContainer withoutPadding style={{ paddingTop: 0 }}>
      <Scroll>
        <HomeTopBar />

        <StudentCard student={students[0]} />

        <HomeButtonsContainer>
          <HomeButton onPress={() => 0}>
            <AntDesign name="like1" color="#0FAD58" size={28} />
          </HomeButton>

          <HomeButton onPress={() => 0}>
            <AntDesign name="dislike1" color="#C61616" size={28} />
          </HomeButton>
        </HomeButtonsContainer>
      </Scroll>
    </PageContainer>
  )
}

export default Home
