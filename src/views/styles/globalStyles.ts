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
