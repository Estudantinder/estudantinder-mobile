import { useNavigation } from '@react-navigation/native'
import React, { RefObject, useState } from 'react'
import { useRef } from 'react'
import { View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'

import Student from 'packages/entities/Student'
import { useMainContext } from 'packages/main/context'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import { PageContainer } from 'packages/styles'

import HomeLikeAndDislike from '../components/LikeAndDislike'
import StudentCard from '../components/StudentCard'
import HomeTopBar from '../components/Topbar'
import { HomeMain } from './home-pages.styles'

export interface HomeStudentsPageProps {
  drawerRef: RefObject<DrawerLayout>
}

const HomeStudentsPage: React.FC<HomeStudentsPageProps> = (props) => {
  const swiperRef = useRef<Swiper<Student>>(null)

  const router = useNavigation()

  const context = useMainContext()

  const [isAnimationActive, setIsAnimationActive] = useState(false)

  const openDrawer = () => props.drawerRef.current?.openDrawer()

  const handleSwipeAnimation = (side: 'left' | 'right') => {
    if (isAnimationActive) return

    setIsAnimationActive(true)

    setTimeout(() => setIsAnimationActive(false), 1000)

    if (side === 'left') swiperRef.current?.swipeLeft()

    if (side === 'right') swiperRef.current?.swipeRight()
  }

  const handleLike = async () => {
    await context.likeStudent()

    swiperRef.current?.jumpToCardIndex(0)
  }

  const handleDislike = async () => {
    await context.dislikeStudent()

    swiperRef.current?.jumpToCardIndex(0)
  }

  const handleNavigateToTargetProfile = () => {
    router.navigate(AUTHENTICATED_ROUTES.TARGET_PROFILE, {
      student: {
        ...context.students[0],
        birth_date: context.students[0].birth_date.getTime(),
      },
    })
  }

  return (
    <PageContainer withoutPadding style={{ paddingTop: 0 }}>
      <HomeTopBar onFiltersPressed={openDrawer} />

      <HomeMain>
        <Swiper
          ref={swiperRef}
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
          onTapCard={handleNavigateToTargetProfile}
        />
      </HomeMain>

      <HomeLikeAndDislike
        isActive={isAnimationActive}
        onLike={() => handleSwipeAnimation('left')}
        onDislike={() => handleSwipeAnimation('right')}
      />
    </PageContainer>
  )
}

export default HomeStudentsPage
