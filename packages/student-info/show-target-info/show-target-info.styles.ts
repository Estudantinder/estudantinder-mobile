import styled from 'styled-components/native'

import { Row } from 'packages/styles'
import theme from 'packages/styles/theme'

export const ShowTargetStudentContainer = styled.View`
  flex: 1;
  width: 100%;
`

export const ShowTargetStudentProfileImage = styled.Image`
  width: 175px;
  height: 190px;
  border-radius: 4px;
`

export const ShowTargetStudentInfoContainer = styled.View`
  width: 100%;
  justify-content: space-around;
  padding: 16px 4px;
`

export const ShowTargetStudentInfoLabel = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.secondary.dark_purple};
  margin-left: 4px;
`

export const ShowTargetStudentImageContainer = styled.View`
  flex: 1;
  padding: 4px;
  align-self: center;
`

export const ShowTargetStudentImage = styled.Image`
  width: 100%;
  height: 240px;
  border-radius: 6px;
`

export const ShowTargetStudentInfoHeader = styled(Row)`
  margin-bottom: 15px;
`

export const ShowTargetStudentBioContainer = styled.View`
  padding: 12px 8px;
  width: 100%;
  background-color: ${theme.colors.input.background};
  border-radius: 4px;
`

export const ShowTargetStudentBioText = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.input.text};
`

export const ShowTargetStudentSchoolRow = styled(Row)`
  justify-content: space-between;
`

export const ShowTargetStudentSchoolLabel = styled.Text`
  font-family: ${theme.fonts.primary};
  font-size: 14px;
  color: ${theme.colors.input.active_text};
  padding-top: 12px;
`

export const ShowTargetStudentSchoolContent = styled.View`
  max-width: 60%;
`
