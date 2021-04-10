import styled from 'styled-components/native'

import { fonts } from 'packages/styles/theme'

interface RowOptionsButtonStyleProps {
  isActive: boolean
}

export const RowOptionsButtonContainer = styled.TouchableOpacity<RowOptionsButtonStyleProps>`
  flex: 1;
  height: 40px;

  justify-content: center;
  align-items: center;
  border-radius: 3px;

  background-color: ${(props) =>
    props.isActive ? props.theme.base.purple : props.theme.background.default};
  border-width: 1px;
  border-color: ${(props) => props.theme.base.purple};
`

export const RowOptionsButtonText = styled.Text<RowOptionsButtonStyleProps>`
  font-family: ${fonts.button};
  color: ${(props) => (props.isActive ? '#fff' : props.theme.base.purple)};
`
