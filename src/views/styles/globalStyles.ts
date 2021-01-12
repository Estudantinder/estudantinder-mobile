import { Feather } from '@expo/vector-icons'
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

export const FormTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 20px;

  margin-bottom: 12px;
`

export const FormMain = styled.View`
  min-height: 60%;
  width: 100%;

  justify-content: space-around;
  align-items: center;
`

export const SignUpForm = styled(Form)`
  margin-bottom: 32px;
`

export const InputLabel = styled.Text`
  font-family: ${(props) => props.theme.fonts.input.label};
  color: ${(props) => props.theme.colors.input.label};

  margin-bottom: 10px;
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

export const InputInvalidContainer = styled.View`
  height: 16px;
  width: 100%;

  margin-top: 6px;

  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`

export const InputInvalidIcon = styled(Feather).attrs({
  name: 'info',
  size: 14,
})`
  color: ${(props) => props.theme.colors.input.invalid};
`

export const InputInvalidText = styled.Text`
  font-family: ${(props) => props.theme.fonts.input.label};
  font-size: 12px;
  color: ${(props) => props.theme.colors.input.invalid};

  margin-left: 4px;

  height: 16px;
  width: 90%;

  overflow: hidden;
`
