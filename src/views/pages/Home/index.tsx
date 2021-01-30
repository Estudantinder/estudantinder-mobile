import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Feather, AntDesign } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

import { useAuthContext } from 'main/context/auth'
import { useStudentsContext } from 'main/context/students'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import Card from 'views/components/organisms/Card'
import FilterDrawer from 'views/components/organisms/FilterDrawer'

import Styled from './styles'

export default function Home() {
  const { students, reloadStudents } = useStudentsContext()

  const { signOut } = useAuthContext()
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    reloadStudents()
  }, [reloadStudents])

  return (
    <Styled.Container>
      <StatusBar style="light" />

      <Styled.TopBar>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <Feather name="filter" color="#fff" size={24} />
        </TouchableOpacity>
      </Styled.TopBar>

      <Styled.Main>
        {students[0] && <Card student={students[0]} />}

        <Styled.ButtonsContainer>
          <Styled.Button>
            <AntDesign name="like1" color="#37C77F" size={32} />
          </Styled.Button>

          <Styled.Button>
            <AntDesign name="dislike1" color="#ff3b83" size={32} />
          </Styled.Button>
        </Styled.ButtonsContainer>

        <PrimaryButton onPress={signOut}>Sair</PrimaryButton>
      </Styled.Main>

      <FilterDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </Styled.Container>
  )
}
