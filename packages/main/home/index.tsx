import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import Swiper from 'react-native-deck-swiper'

import { AntDesign } from '@expo/vector-icons'

import Student from 'packages/entities/Student'
import { PageContainer } from 'packages/styles'

import { useMainContext } from '../context'
import HomeLoadingPage from './components/LoadingPage'
import HomeNoStudentPage from './components/NoStudentPage'
import StudentCard from './components/StudentCard'
import HomeTopBar from './components/Topbar'
import { HomeButton, HomeButtonsContainer, HomeMain } from './home.styles'

const Home: React.FC = () => {
  const { resetStudents, ...context } = useMainContext()

  const useSwiper = useRef<Swiper<Student>>(null)

  const [isAnimationActive, setIsAnimationActive] = useState(false)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fn = async () => {
      await resetStudents()

      setIsLoading(false)
    }

    fn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <HomeLoadingPage />

  if (!context.students.length) return <HomeNoStudentPage />

  const handleSwipeAnimation = (side: 'left' | 'right') => {
    if (isAnimationActive) return

    setIsAnimationActive(true)

    setTimeout(() => setIsAnimationActive(false), 1000)

    if (side === 'left') useSwiper.current?.swipeLeft()

    if (side === 'right') useSwiper.current?.swipeRight()
  }

  const handleLike = async () => {
    await context.likeStudent()

    useSwiper.current?.jumpToCardIndex(0)
  }

  const handleDislike = async () => {
    await context.dislikeStudent()

    useSwiper.current?.jumpToCardIndex(0)
  }

  return (
    <PageContainer withoutPadding style={{ paddingTop: 0 }}>
      <HomeTopBar />

      <HomeMain>
        <Swiper
          ref={useSwiper}
          childrenOnTop
          cardVerticalMargin={0}
          backgroundColor="#fff"
          cards={[context.students[0], context.students[1]]}
          renderCard={(student) =>
            student ? <StudentCard student={student} /> : <View />
          }
          animateCardOpacity
          verticalSwipe={false}
          stackSeparation={0}
          stackSize={2}
          horizontalSwipe={false}
          onSwipedLeft={handleLike}
          onSwipedRight={handleDislike}
        />
      </HomeMain>

      <HomeButtonsContainer>
        <HomeButton onPress={() => handleSwipeAnimation('left')}>
          <AntDesign
            name="like1"
            color={isAnimationActive ? 'rgba(15, 173, 88, .3)' : '#0FAD58'}
            size={28}
          />
        </HomeButton>

        <HomeButton onPress={() => handleSwipeAnimation('right')}>
          <AntDesign
            name="dislike1"
            color={isAnimationActive ? 'rgba(198, 22, 22, .3)' : '#C61616'}
            size={28}
          />
        </HomeButton>
      </HomeButtonsContainer>
    </PageContainer>
  )
}

export default Home
