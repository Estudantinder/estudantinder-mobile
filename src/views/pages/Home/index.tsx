import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

import { useStudentsContext } from 'main/context/students'

import TopImage from 'views/assets/logo.png'
import Card from 'views/components/organisms/Card'
import FilterDrawer from 'views/components/organisms/FilterDrawer'
import { Container } from 'views/styles/globalStyles'

export default function Home() {
  const { students, reloadStudents } = useStudentsContext()

  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    reloadStudents()
  }, [reloadStudents])

  return (
    <Container>
      <Image source={TopImage} />
      <TouchableOpacity onPress={() => setDrawerOpen(true)}>
        <Feather name="filter" color="#4F4F4F" size={24} />
      </TouchableOpacity>

      {students[0] && <Card student={students[0]} />}

      <FilterDrawer open={drawerOpen} setOpen={setDrawerOpen} />

      <StatusBar translucent style="dark" />
    </Container>
  )
}
