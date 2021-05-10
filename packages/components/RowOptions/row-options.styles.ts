import styled from 'styled-components/native'

import { fonts } from 'packages/styles/theme'
import theme from 'packages/utils/theme'

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
    props.isActive
      ? theme(props).base.purple
      : theme(props).background.default};
  border-width: 1px;
  border-color: ${(props) => theme(props).base.purple};
`

export const RowOptionsButtonText = styled.Text<RowOptionsButtonStyleProps>`
  font-family: ${fonts.button};
  color: ${(props) => (props.isActive ? '#fff' : theme(props).base.purple)};
`
