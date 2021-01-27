import { Dimensions } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

import styled from 'styled-components/native'

const Container = styled(Animated.View)`
  position: absolute;
  top: 0;
  height: ${Dimensions.get('window').height - 44}px;
  width: ${Dimensions.get('window').width - 24}px;
  background-color: ${(props) => props.theme.colors.background.light_purple};
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
`

const BackContainer = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 52px;
  right: 20px;
`

const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`

export default { Container, BackContainer, ScrollView }
