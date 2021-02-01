import { Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'

import styled from 'styled-components/native'

import { Title } from 'views/styles/globalStyles'

const Container = styled(Animated.View)`
  position: absolute;
  top: 0;
  height: ${Dimensions.get('window').height - 44}px;
  width: ${Dimensions.get('window').width - 24}px;
  background-color: ${(props) => props.theme.colors.background.light_purple};
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  elevation: 12;
`

const BackContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
`

const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`

const TopBarTitle = styled(Title)`
  text-align: center;
  margin-bottom: 0;
`

const TooltipText = styled.Text`
  font-family: ${(props) => props.theme.fonts.subtitle};
`

export default {
  Container,
  BackContainer,
  ScrollView,
  TopBarTitle,
  TooltipText,
}
