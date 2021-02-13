import styled from 'styled-components/native'

import theme from 'packages/styles/theme'

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
    props.isActive ? theme.colors.primary.purple : '#fff'};
  border-width: 1px;
  border-color: ${theme.colors.primary.purple};
`

export const RowOptionsButtonText = styled.Text<RowOptionsButtonStyleProps>`
  font-family: ${theme.fonts.button};
  color: ${(props) => (props.isActive ? '#fff' : theme.colors.primary.purple)};
`
