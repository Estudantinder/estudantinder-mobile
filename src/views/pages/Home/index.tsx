import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

import { useAuthContext } from 'main/context/auth'
import { useStudentsContext } from 'main/context/students'

import TopImage from 'views/assets/logo.png'
import PrimaryButton from 'views/components/atoms/PrimaryButton'
import Card from 'views/components/organisms/Card'
import FilterDrawer from 'views/components/organisms/FilterDrawer'
import { Container, Row } from 'views/styles/globalStyles'

export default function Home() {
  const { students, reloadStudents } = useStudentsContext()

  const { signOut } = useAuthContext()
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    reloadStudents()
  }, [reloadStudents])

  return (
    <Container>
      <Row>
        <Image source={TopImage} />
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <Feather name="filter" color="#4F4F4F" size={24} />
        </TouchableOpacity>
      </Row>

      {students[0] && <Card student={students[0]} />}

      <PrimaryButton onPress={signOut}>Sair</PrimaryButton>
      <FilterDrawer open={drawerOpen} setOpen={setDrawerOpen} />

      <StatusBar translucent style="dark" />
    </Container>
  )
}
