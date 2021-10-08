import styled from 'styled-components/native'

import { Row } from 'packages/styles'
import { fonts } from 'packages/styles/theme'
import theme from 'packages/utils/theme'

export const ShowStudentContainer = styled.View`
  flex: 1;
  width: 100%;
`

export const ShowStudentProfileImage = styled.Image`
  width: 175px;
  height: 190px;
  border-radius: 4px;
`

export const ShowStudentInfoContainer = styled.View`
  width: 100%;
  justify-content: space-around;
  padding: 24px 4px;
`

export const ShowStudentInfoLabel = styled.Text`
  font-size: 14px;
  font-family: ${fonts.primary};
  color: ${(props) => theme(props).base.secondary_purple};
  margin-left: 4px;
`

export const ShowStudentImageContainer = styled.View`
  flex: 1;
  padding: 4px;
  align-self: center;
`

export const ShowStudentImage = styled.Image`
  width: 100%;
  height: 240px;
  border-radius: 6px;
`

export const ShowStudentInfoHeader = styled(Row)`
  margin-bottom: 15px;
`

export const ShowStudentBioContainer = styled.View`
  padding: 12px 8px;
  width: 100%;
  background-color: ${(props) => theme(props).input.background};
  border-radius: 4px;
`

export const ShowStudentBioText = styled.Text`
  font-size: 12px;
  font-family: ${fonts.input.text};
  color: ${(props) => theme(props).input.active_text};
`

export const ShowStudentSchoolRow = styled(Row)`
  justify-content: space-between;
`

export const ShowStudentSchoolLabel = styled.Text`
  font-family: ${fonts.primary};
  font-size: 14px;
  color: ${(props) => theme(props).text.default};
  padding-top: 12px;
`

export const ShowStudentSchoolContent = styled.View`
  max-width: 60%;
`
