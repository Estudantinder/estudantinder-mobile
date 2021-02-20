import styled from 'styled-components/native'

import { Title } from 'packages/styles'

export const HomeMain = styled.View`
  flex: 1;
  width: 100%;
`

export const HomeNoStudentContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const HomeNoStudentTitle = styled(Title)`
  font-size: 16px;
  margin: 8px 0px;
  text-align: center;
`

export const HomeNoStudentSubTitle = styled(Title)`
  font-size: 14px;
  text-align: center;
`
