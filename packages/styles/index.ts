import { Form } from '@unform/mobile'
import Constants from 'expo-constants'
import styled from 'styled-components/native'

import theme from 'packages/utils/theme'

import { fonts } from './theme'

export interface PageContainerStylesProps {
  withoutPadding?: boolean
}

export const PageContainer = styled.KeyboardAvoidingView<PageContainerStylesProps>`
  flex: 1;
  width: 100%;

  justify-content: space-around;
  align-items: center;

  padding: ${(props) => (props.withoutPadding ? 0 : 16)}px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  padding-bottom: 0px;

  background-color: ${(props) => theme(props).background.default};
`

export const TextContainer = styled.View`
  width: 200px;
  height: 200px;
  background-color: ${(props) => theme(props).background.default};
`

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;

  justify-content: space-around;
  align-items: center;

  padding-top: ${Constants.statusBarHeight + 20}px;
  padding-bottom: 0px;
  background-color: ${(props) => theme(props).background.default};
`

export const StyledForm = styled(Form)`
  margin-bottom: 24px;
  width: 100%;
`

export const Subtitle = styled.Text`
  font-family: ${fonts.subtitle};
  text-align: center;
  color: ${(props) => theme(props).text.default};
`

export const Title = styled.Text`
  font-family: ${fonts.titles.primary};
  font-size: 20px;
  color: ${(props) => theme(props).text.default};

  margin-bottom: 12px;
`

export interface RowStylesProps {
  justifyContent?:
    | 'space-between'
    | 'space-around'
    | 'center'
    | 'flex-start'
    | 'flex-end'
}

export const Row = styled.View<RowStylesProps>`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  position: relative;
`

export interface HorizontalDividerProps {
  width?: number
}

export const HorizontalDivider = styled.View<HorizontalDividerProps>`
  width: ${(props) => props.width || 10}px;
`

export const VerticalDivider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${(props) => theme(props).components.divider};
`
