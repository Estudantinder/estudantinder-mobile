import { BorderlessButton } from 'react-native-gesture-handler'
import PagerView from 'react-native-pager-view'

import styled from 'styled-components/native'

import { Subtitle, Title } from 'packages/styles'
import { fonts } from 'packages/styles/theme'
import theme from 'packages/utils/theme'

export const OnBoardingContainer = styled(PagerView)`
  flex: 1;
`

export const OnBoardingPageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => theme(props).background.default};
  padding-top: 32px;
  padding-horizontal: 20px;
`

export const OnBoardingPageTitle = styled(Title)`
  margin-vertical: 16px;
  text-align: center;
`

export const OnBoardingPageSubTitle = styled(Subtitle)`
  text-align: center;
`

export const OnboardingFooterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 50px;

  background-color: ${(props) => theme(props).background.default};

  border-top-width: 1px;
  border-color: ${(props) => theme(props).components.divider};

  align-items: center;
`

export const OnBoardingFooterButton = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 120px;
`

export const OnBoardingFooterButtonText = styled.Text`
  color: ${(props) => theme(props).text.default};
  font-family: ${fonts.input.label};
  font-size: 14px;
`

export const OnBoardingPaginationContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 64px;
  padding-bottom: 16px;
  background-color: ${(props) => theme(props).background.default};
`

export interface OnBoardingPaginationDotStylesProps {
  active: boolean
}

export const OnBoardingPaginationDot = styled.View<OnBoardingPaginationDotStylesProps>`
  width: 10px;
  height: 10px;
  background-color: ${(props) =>
    props.active
      ? theme(props).base.purple
      : theme(props).components.pagination.inactive_dot};
  margin-horizontal: 14px;
  border-radius: 90px;
`
