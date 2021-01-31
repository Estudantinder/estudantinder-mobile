import styled from 'styled-components/native'

const Container = styled.View`
  margin-top: 20px;
`

export interface PickerBackgroundStylesProps {
  backgroundColor?: string
}

const PickerBackground = styled.View<PickerBackgroundStylesProps>`
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.input.background};
  border-radius: 4px;
  min-height: 40px;
  justify-content: center;
  padding: 0px 8px;
`

export default { Container, PickerBackground }
