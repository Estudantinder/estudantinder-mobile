import React from 'react'

import { Feather } from '@expo/vector-icons'

import { Row } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'

import {
  ShowStudentInfoContainer,
  ShowStudentInfoHeader,
  ShowStudentInfoLabel,
  ShowStudentBioContainer,
  ShowStudentBioText,
} from '../show-student-info.styles'

export interface ShowStudentBioProps {
  bio: string
}

const ShowStudentBio: React.FC<ShowStudentBioProps> = (props) => {
  const { theme } = useToggleThemeContext()

  return (
    <Row style={{ paddingHorizontal: 16 }}>
      <ShowStudentInfoContainer>
        <ShowStudentInfoHeader>
          <Feather name="type" color={theme.base.secondary_purple} size={20} />
          <ShowStudentInfoLabel>Biografia</ShowStudentInfoLabel>
        </ShowStudentInfoHeader>

        <ShowStudentBioContainer>
          <ShowStudentBioText>{props.bio}</ShowStudentBioText>
        </ShowStudentBioContainer>
      </ShowStudentInfoContainer>
    </Row>
  )
}

export default ShowStudentBio
