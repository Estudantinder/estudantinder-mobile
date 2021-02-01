import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

const Container = styled(RectButton)`
  flex: 1;
  height: 240px;
  position: relative;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.background.light_purple};

  border-radius: 6px;
`

const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
  border-radius: 6px;
`

const DeleteContainer = styled.View`
  border-top-right-radius: 6px;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 28px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
`

const DeleteButton = styled(RectButton)`
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 28px;

  border-top-right-radius: 6px;
`

export default { Container, Image, DeleteContainer, DeleteButton }
