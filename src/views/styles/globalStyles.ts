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

  background-color: #f5f5f5;
`

export const FormTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 18px;

  margin-bottom: 12px;
`

export const FormMain = styled.View`
  min-height: 60%;
  width: 100%;

  justify-content: space-around;
  align-items: center;
`
