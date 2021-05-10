import styled from 'styled-components/native'

import { Title } from 'packages/styles'
import { fonts } from 'packages/styles/theme'
import theme from 'packages/utils/theme'

export const FiltersContainer = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 36px;
  padding-left: 16px;
  padding-right: 16px;
`

export const FiltersBackContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
`

export const FiltersScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`

export const FiltersTooltipText = styled.Text`
  font-family: ${fonts.subtitle};
  color: ${(props) => theme(props).text.default};
`

export const FiltersSelectContainer = styled.View`
  width: 100%;
`

export const FiltersTopBarTitle = styled(Title)`
  text-align: center;
  margin-bottom: 0;
`

export const FiltersSelectBackground = styled.View`
  background-color: #fff;
  border-radius: 2px;
  min-height: 36px;
  justify-content: center;
  padding: 4px;
  width: 100%;
`
