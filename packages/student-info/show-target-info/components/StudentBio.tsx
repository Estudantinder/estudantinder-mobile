import React from 'react'

import { Feather } from '@expo/vector-icons'

import { Row } from 'packages/styles'
import theme from 'packages/styles/theme'

import {
  ShowTargetStudentInfoContainer,
  ShowTargetStudentInfoHeader,
  ShowTargetStudentInfoLabel,
  ShowTargetStudentBioContainer,
  ShowTargetStudentBioText,
} from '../show-target-info.styles'

export interface ShowTargetStudentBioProps {
  bio: string
}

const ShowTargetStudentBio: React.FC<ShowTargetStudentBioProps> = (props) => {
  return (
    <Row style={{ paddingHorizontal: 16 }}>
      <ShowTargetStudentInfoContainer>
        <ShowTargetStudentInfoHeader>
          <Feather
            name="type"
            color={theme.colors.secondary.dark_purple}
            size={20}
          />
          <ShowTargetStudentInfoLabel>Biografia</ShowTargetStudentInfoLabel>
        </ShowTargetStudentInfoHeader>

        <ShowTargetStudentBioContainer>
          <ShowTargetStudentBioText>{props.bio}</ShowTargetStudentBioText>
        </ShowTargetStudentBioContainer>
      </ShowTargetStudentInfoContainer>
    </Row>
  )
}

export default ShowTargetStudentBio
