import React, { RefObject, useRef, useState } from 'react'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'

import { useMainContext } from 'packages/main/context'
import { PageContainer } from 'packages/styles'

import HomeLikeAndDislike from '../components/LikeAndDislike'
import HomeStudentsStack, {
  HomeStudentsStackRef,
} from '../components/StudentsStack'
import HomeTopBar from '../components/Topbar'
import { HomeMain } from './home-pages.styles'

export interface HomeStudentsPageProps {
  drawerRef: RefObject<DrawerLayout>
}

const HomeStudentsPage: React.FC<HomeStudentsPageProps> = (props) => {
  const ref = useRef<HomeStudentsStackRef>(null)

  const context = useMainContext()

  const [isAnimationActive, setIsAnimationActive] = useState(false)

  const openDrawer = () => props.drawerRef.current?.openDrawer()

  const handleSwipeAnimation = (side: 'left' | 'right') => {
    if (isAnimationActive) return

    setIsAnimationActive(true)

    setTimeout(() => setIsAnimationActive(false), 1000)

    if (side === 'left') ref.current?.swipeLeft()

    if (side === 'right') ref.current?.swipeRight()
  }

  const handleLike = async () => {
    // await context.likeStudent()

    handleSwipeAnimation('left')
  }

  const handleDislike = async () => {
    // await context.dislikeStudent()

    handleSwipeAnimation('right')
  }

  return (
    <PageContainer withoutPadding style={{ paddingTop: 0 }}>
      <HomeTopBar onFiltersPressed={openDrawer} />

      <HomeMain>
        <HomeStudentsStack ref={ref} students={context.students} />
      </HomeMain>

      <HomeLikeAndDislike
        isActive={isAnimationActive}
        onLike={handleLike}
        onDislike={handleDislike}
      />
    </PageContainer>
  )
}

export default HomeStudentsPage
