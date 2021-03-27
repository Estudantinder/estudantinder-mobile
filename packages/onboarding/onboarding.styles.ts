import { BorderlessButton } from 'react-native-gesture-handler'
import PagerView from 'react-native-pager-view'

import styled from 'styled-components/native'

import { Subtitle, Title } from 'packages/styles'
import theme from 'packages/styles/theme'

export const OnBoardingContainer = styled(PagerView)`
  flex: 1;
`

export const OnBoardingPageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-top: 32px;
  padding-horizontal: 20px;
`

export const OnBoardingPageTitle = styled(Title)`
  margin-vertical: 16px;
  text-align: center;
`

export const OnBoardingPageSubTitle = styled(Subtitle)`
  margin-bottom: 20px;
  text-align: center;
`

export const OnboardingFooterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 50px;

  background-color: ${theme.colors.primary.green};

  color: #fff;

  align-items: center;
`

export const OnBoardingFooterButton = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 120px;
`

export const OnBoardingFooterButtonText = styled.Text`
  color: #fff;
  font-family: ${theme.fonts.input.label};
  font-size: 14px;
`
