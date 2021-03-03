import React, { useEffect, useRef, useState } from 'react'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'

import alertModal from 'packages/utils/alertModal'

import { useMainContext } from '../context'
import FilterDrawer from '../filters'
import HomeLoadingPage from './pages/LoadingPage'
import HomeNoStudentPage from './pages/NoStudentPage'
import HomeStudentsPage from './pages/Students'

const Home: React.FC = () => {
  const { reloadAllStudents, ...context } = useMainContext()

  const [isLoading, setIsLoading] = useState(true)

  const drawerRef = useRef<DrawerLayout>(null)

  useEffect(() => {
    const fn = async () => {
      try {
        await reloadAllStudents()
      } catch (error) {
        alertModal(error)
      }

      setIsLoading(false)
    }

    fn()
  }, [reloadAllStudents])

  let children: JSX.Element | undefined = undefined

  if (isLoading) children = <HomeLoadingPage drawerRef={drawerRef} />
  else if (!context.students.length)
    children = <HomeNoStudentPage drawerRef={drawerRef} />
  else children = <HomeStudentsPage drawerRef={drawerRef} />

  return <FilterDrawer drawerRef={drawerRef}>{children}</FilterDrawer>
}

export default Home
