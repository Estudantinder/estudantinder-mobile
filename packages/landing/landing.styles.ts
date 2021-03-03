import styled from 'styled-components/native'

import theme from 'packages/styles/theme'

const LandingButtonsContainer = styled.View`
  width: 100%;

  align-items: center;
`

const LandingTitle = styled.Text`
  font-family: ${theme.fonts.titles.primary};
  font-size: 18px;
  text-align: center;
  color: #4f4f4f;
`

const LandingFooter = styled.View`
  justify-content: space-around;
  align-items: center;
`

const SignInButton = styled.TouchableOpacity`
  border-color: ${theme.colors.primary.green};
  border-width: 2px;

  width: 100%;
  height: 45px;

  justify-content: center;
  align-items: center;

  border-radius: 10px;
`

const SignInText = styled.Text`
  font-family: ${theme.fonts.button};
  font-weight: 700;
  text-align: center;

  color: ${theme.colors.primary.green};
`

export default {
  LandingTitle,
  LandingFooter,
  LandingButtonsContainer,
  SignInButton,
  SignInText,
}
