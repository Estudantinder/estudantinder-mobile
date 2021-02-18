import React, { useEffect, useRef } from 'react'
import { Dimensions, Text, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'

import { AntDesign } from '@expo/vector-icons'

import Scroll from 'packages/components/Scroll'
import Student from 'packages/entities/Student'
import { PageContainer } from 'packages/styles'

import { useMainContext } from '../context'
import StudentCard from './components/StudentCard'
import HomeTopBar from './components/Topbar'
import { HomeButton, HomeButtonsContainer } from './home.styles'

const Home: React.FC = () => {
  const { students, resetStudents } = useMainContext()
  const useSwiper = useRef<Swiper<Student>>(null)

  const handleOnSwipedLeft = () => useSwiper.current?.swipeLeft()
  const handleOnSwipedRight = () => useSwiper.current?.swipeRight()

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
      <Scroll scrollEnabled={false}>
        <HomeTopBar />

        <View
          style={{ flex: 1, height: Dimensions.get('window').height - 230 }}
        >
          <Swiper
            ref={useSwiper}
            childrenOnTop
            cardVerticalMargin={0}
            backgroundColor="#fff"
            cards={students}
            renderCard={(student) => <StudentCard student={student} />}
            animateCardOpacity
            verticalSwipe={false}
            infinite
            stackSeparation={0}
            stackSize={2}
          />
        </View>

        <HomeButtonsContainer>
          <HomeButton onPress={handleOnSwipedLeft}>
            <AntDesign name="like1" color="#0FAD58" size={28} />
          </HomeButton>

          <HomeButton onPress={handleOnSwipedRight}>
            <AntDesign name="dislike1" color="#C61616" size={28} />
          </HomeButton>
        </HomeButtonsContainer>
      </Scroll>
    </PageContainer>
  )
}

export default Home
