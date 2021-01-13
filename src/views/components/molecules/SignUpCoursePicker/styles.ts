import { Picker } from '@react-native-picker/picker'
import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

const Select = styled(Picker)`
  background-color: ${(props) => props.theme.colors.input.background};
  color: ${(props) => props.theme.colors.input.active_text};

  height: 50px;
  width: ${Dimensions.get('window').width - 40}px;
`
export default { Select }
