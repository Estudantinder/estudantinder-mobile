import { BorderlessButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
`

const Image = styled.View`
  flex: 1;
  background-color: #c0c0c0;

  border-top-end-radius: 8px;
  border-top-left-radius: 8px;
`

const Footer = styled.View`
  width: 100%;
  background-color: #f0f0f0;
  padding: 16px;
  justify-content: space-between;

  position: relative;

  border-bottom-end-radius: 8px;
  border-bottom-left-radius: 8px;
`

const ProfileButtonContainer = styled.View`
  position: absolute;
  right: 0px;
  top: 0px;
  padding-right: 16px;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`

const ProfileButton = styled(BorderlessButton)`
  justify-content: center;
  align-items: center;
`

const NameText = styled.Text`
  font-family: ${(props) => props.theme.fonts.titles.primary};
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary.green};
`

const FooterText = styled.Text`
  font-family: ${(props) => props.theme.fonts.primary};
  color: #2d2d2d;
  line-height: 24px;
`

export default {
  Container,
  Image,
  Footer,
  NameText,
  FooterText,
  ProfileButtonContainer,
  ProfileButton,
}
