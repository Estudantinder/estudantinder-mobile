import styled from 'styled-components/native'

const ImageContainer = styled.View`
  margin-bottom: 12px;
`

const ButtonsContainer = styled.View`
  width: 100%;

  align-items: center;
`

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.titles.primary};
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #4f4f4f;

  margin-top: 12px;
`

const Footer = styled.View`
  height: 200px;

  justify-content: space-around;
  align-items: center;
`

const SignInButton = styled.TouchableOpacity`
  border-color: ${(props) => props.theme.colors.primary.green};
  border-width: 2px;

  width: 100%;
  height: 45px;

  justify-content: center;
  align-items: center;

  border-radius: 10px;
`

const SignInText = styled.Text`
  font-family: ${(props) => props.theme.fonts.button};
  font-weight: 700;
  text-align: center;

  color: ${(props) => props.theme.colors.primary.green};
`

export default {
  Title,
  Footer,
  ImageContainer,
  ButtonsContainer,
  SignInButton,
  SignInText,
}
