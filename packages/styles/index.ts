import { Form } from '@unform/mobile'
import Constants from 'expo-constants'
import styled from 'styled-components/native'

export const PageContainer = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;

  justify-content: space-around;
  align-items: center;

  padding: 20px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  padding-bottom: 0px;

  background-color: ${(props) => props.theme.colors.background.page};
`

export const StyledForm = styled(Form)`
  margin-bottom: 24px;
  width: 100%;
`

export const Subtitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.subtitle};
  text-align: center;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.titles.primary};
  font-size: 20px;

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
