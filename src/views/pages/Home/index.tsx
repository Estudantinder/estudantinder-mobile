import React, { useEffect } from 'react'
import { Image } from 'react-native'

import { useStudentsContext } from 'main/context/students'

import TopImage from 'views/assets/logo.png'
import Card from 'views/components/organisms/Card'
import { Container } from 'views/styles/globalStyles'

export default function Home() {
  const { students, reloadStudents } = useStudentsContext()

  useEffect(() => {
    reloadStudents()
  }, [reloadStudents])

  return (
    <Container>
      <Image source={TopImage} />

      {students[0] && <Card student={students[0]} />}
    </Container>
  )
}
