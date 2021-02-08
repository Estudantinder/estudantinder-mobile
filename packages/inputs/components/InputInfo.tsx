import React, { Fragment } from 'react'

import { Feather } from '@expo/vector-icons'

import theme from 'packages/styles/theme'

import { InputInfoContainer, InputInfoText } from '../styles'

export interface InputInfoProps {
  informative?: boolean
  children?: string
}

const InputInfo: React.FC<InputInfoProps> = (props) => {
  const color = props.informative ? '#9b9b9b' : theme.colors.input.error

  return (
    <InputInfoContainer>
      {props.children && (
        <Fragment>
          <Feather name="info" size={14} color={color} />
          <InputInfoText color={color}>{props.children}</InputInfoText>
        </Fragment>
      )}
    </InputInfoContainer>
  )
}

export default InputInfo
