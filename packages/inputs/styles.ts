import styled from 'styled-components/native'

export interface InputStylesProps {
  isActive: boolean
  isInvalid: boolean
}

export const InputInfoContainer = styled.View`
  height: 16px;
  width: 100%;

  margin-top: 6px;

  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`

export interface InputInfoStylesProps {
  color: string
}

export const InputInfoText = styled.Text<InputInfoStylesProps>`
  font-family: ${(props) => props.theme.fonts.input.label};
  font-size: 12px;
  color: ${(props) => props.color};

  margin-left: 4px;

  height: 16px;
  width: 90%;

  overflow: hidden;
`

export const StyledInput = styled.TextInput<InputStylesProps>`
  min-width: 100%;
  min-height: 40px;

  padding: 4px 15px;

  background-color: ${(props) => props.theme.colors.input.background};
  color: ${(props) => props.theme.colors.input.active_text};
  font-family: ${(props) => props.theme.fonts.input.text};

  border-width: 2px;
  border-color: ${(props) =>
    props.isActive
      ? props.theme.colors.input.active_border
      : props.isInvalid
      ? props.theme.colors.input.error
      : props.theme.colors.input.background};
  border-radius: 4px;
`

export const InputContainer = styled.View`
  width: 100%;

  margin-top: 20px;
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

export const InputLabel = styled.Text`
  font-family: ${(props) => props.theme.fonts.input.label};
  color: ${(props) => props.theme.colors.input.label};

  margin-bottom: 10px;
`
