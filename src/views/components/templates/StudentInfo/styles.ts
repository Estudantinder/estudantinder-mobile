import styled from 'styled-components/native'

import { Row } from 'views/styles/globalStyles'

const Container = styled.View`
  flex: 1;

  width: 100%;
`

const InfoContainer = styled.View`
  width: 100%;
  justify-content: space-around;
  padding: 20px 4px;
`

const InfoLabel = styled.Text`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.secondary.dark_purple};
  margin-left: 4px;
`

const InfoHeader = styled(Row)`
  margin-bottom: 15px;
`

const BioContainer = styled.View`
  padding: 12px 8px;

  width: 100%;

  background-color: ${(props) => props.theme.colors.input.background};

  border-radius: 4px;
`

const BioText = styled.Text`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.input.text};
`

const SchoolRow = styled(Row)`
  justify-content: space-between;
`

const SchoolLabel = styled.Text`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 14px;
  color: ${(props) => props.theme.colors.input.active_text};
  padding-top: 12px;
`

export default {
  Container,
  InfoContainer,
  InfoLabel,
  InfoHeader,
  BioContainer,
  BioText,
  SchoolRow,
  SchoolLabel,
}
