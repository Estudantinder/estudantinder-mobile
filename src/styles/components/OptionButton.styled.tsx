import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

interface IStyledRectButtonProps {
  isActive: boolean
}

const Button = styled(RectButton)<IStyledRectButtonProps>`
  width: 140px;
  height: 54px;

  margin-right: 12px;

  background-color: ${(props) => (props.isActive ? '#6D36DA' : '#fff')};
`

export default {
  Button,
}
