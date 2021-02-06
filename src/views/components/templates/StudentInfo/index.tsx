import React from 'react'
import { View } from 'react-native'

import { Feather } from '@expo/vector-icons'

import Student from 'main/entities/Student'

import PrimaryLabel from 'views/components/atoms/PrimaryLabel'
import PhotosCarrousel from 'views/components/organisms/PhotosCarrousel'
import { HorizontalDivider, Row, Title } from 'views/styles/globalStyles'
import theme from 'views/styles/theme'

import StudentDataAdapter from 'shared/StudentDataAdapter'

import Styled from './styles'

export interface StudentInfoProps {
  student: Student
}

const StudentInfo: React.FC<StudentInfoProps> = ({ student }) => {
  const studentAdapter = new StudentDataAdapter(student)

  return (
    <Styled.Container>
      <Title style={{ textAlign: 'center' }}>
        {studentAdapter.getCompactedName()}, {studentAdapter.getAge()}
      </Title>

      <Styled.InfoContainer>
        <Styled.InfoHeader>
          <Feather
            name="type"
            color={theme.colors.secondary.dark_purple}
            size={20}
          />
          <Styled.InfoLabel>Biografia</Styled.InfoLabel>
        </Styled.InfoHeader>

        <Styled.BioContainer>
          <Styled.BioText>{student.bio}</Styled.BioText>
        </Styled.BioContainer>
      </Styled.InfoContainer>

      <Styled.InfoContainer>
        <Styled.InfoHeader>
          <Feather
            name="image"
            color={theme.colors.secondary.dark_purple}
            size={20}
          />
          <Styled.InfoLabel>Fotos</Styled.InfoLabel>
        </Styled.InfoHeader>

        <Styled.ImageContainer>
          <PhotosCarrousel
            photos={student.photos || []}
            renderItem={({ item }) => {
              return <Styled.Image resizeMode="cover" source={{ uri: item }} />
            }}
          />
        </Styled.ImageContainer>
      </Styled.InfoContainer>

      {student.gender ? (
        <Styled.InfoContainer>
          <Row>
            <Feather
              name="flag"
              size={20}
              color={theme.colors.secondary.dark_purple}
            />
            <Styled.InfoLabel>
              Gênero: {studentAdapter.getGender()}
            </Styled.InfoLabel>
          </Row>
        </Styled.InfoContainer>
      ) : null}

      <Styled.InfoContainer>
        <Styled.InfoHeader>
          <Feather
            name="award"
            size={20}
            color={theme.colors.secondary.dark_purple}
          />
          <Styled.InfoLabel>Informações escolares</Styled.InfoLabel>
        </Styled.InfoHeader>

        <Styled.SchoolRow>
          <View style={{ maxWidth: '60%' }}>
            <Styled.SchoolLabel>
              {studentAdapter.capitalize(student.school.address)} -{' '}
              {studentAdapter.capitalize(student.course.name)}
            </Styled.SchoolLabel>
            <Styled.SchoolLabel>
              Turno: {studentAdapter.getShift()}
            </Styled.SchoolLabel>
          </View>

          <View>
            <Styled.SchoolLabel>
              Série: {student.school_year}º ano
            </Styled.SchoolLabel>
            <Styled.SchoolLabel>
              Sala: {student.classroom.toUpperCase()}
            </Styled.SchoolLabel>
          </View>
        </Styled.SchoolRow>
      </Styled.InfoContainer>

      <Styled.InfoContainer>
        <Styled.InfoHeader>
          <Feather
            name="book-open"
            size={20}
            color={theme.colors.secondary.dark_purple}
          />
          <Styled.InfoLabel>Matérias com afinidade</Styled.InfoLabel>
        </Styled.InfoHeader>

        <Row>
          <PrimaryLabel>{student.subjects[0].name.toUpperCase()}</PrimaryLabel>

          <HorizontalDivider width={6} />

          <PrimaryLabel>{student.subjects[1].name.toUpperCase()}</PrimaryLabel>

          <HorizontalDivider width={6} />

          <PrimaryLabel>{student.subjects[2].name.toUpperCase()}</PrimaryLabel>
        </Row>
      </Styled.InfoContainer>
    </Styled.Container>
  )
}

export default StudentInfo
