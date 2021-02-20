import React, { useEffect, useRef, useState } from 'react'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'

import { useMainContext } from '../context'
import FilterDrawer from './components/FilterDrawer'
import HomeLoadingPage from './pages/LoadingPage'
import HomeNoStudentPage from './pages/NoStudentPage'
import HomeStudentsPage from './pages/Students'

const Home: React.FC = () => {
  const { resetStudents, ...context } = useMainContext()

  const [isLoading, setIsLoading] = useState(true)

  const drawerRef = useRef<DrawerLayout>(null)

  useEffect(() => {
    const fn = async () => {
      await resetStudents()

      setIsLoading(false)
    }

    fn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let children: JSX.Element | undefined = undefined

  if (isLoading) children = <HomeLoadingPage drawerRef={drawerRef} />

  if (!context.students.length)
    children = <HomeNoStudentPage drawerRef={drawerRef} />

  if (!children) children = <HomeStudentsPage drawerRef={drawerRef} />

  return <FilterDrawer drawerRef={drawerRef}>{children}</FilterDrawer>
}

export default Home
