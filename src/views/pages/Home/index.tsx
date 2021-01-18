import React from 'react'
import { Button } from 'react-native'

import { useStudentsContext } from 'main/context/students'

import Card from 'views/components/organisms/Card'
import { Container, Title } from 'views/styles/globalStyles'

export default function Home() {
  const { students, reloadStudents } = useStudentsContext()

  async function a() {
    await reloadStudents()

    console.log(students)
  }

  return (
    <Container>
      <Title>ESTUDANTINDER</Title>

      <Card />

      <Button onPress={a} title="Atualizar estudantes" />
    </Container>
  )
}
