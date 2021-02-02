import { Form } from '@unform/mobile'
import Constants from 'expo-constants'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;

  justify-content: space-around;
  align-items: center;

  padding: 30px;
  padding-top: ${Constants.statusBarHeight + 10}px;
  padding-bottom: 12px;

  background-color: ${(props) => props.theme.colors.background.page};
`

export const SignUpForm = styled(Form)`
  margin-bottom: 32px;
`

export const InputLabel = styled.Text`
  font-family: ${(props) => props.theme.fonts.input.label};
  color: ${(props) => props.theme.colors.input.label};

  margin-bottom: 10px;
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

export const InputContainer = styled.View`
  width: 100%;

  margin-top: 20px;
`
export const Row = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  position: relative;
`

export const InputSuffix = styled.View`
  position: absolute;
  right: 12px;

  width: 24px;
  height: 24px;

  background-color: ${(props) => props.theme.colors.input.background};

  display: flex;
  justify-content: center;
  align-items: center;
`

export interface HorizontalDividerProps {
  width?: number
}

export const HorizontalDivider = styled.View<HorizontalDividerProps>`
  width: ${(props) => props.width || 10}px;
`
