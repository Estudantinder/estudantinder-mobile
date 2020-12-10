import React, { useState } from 'react'
import { Platform } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import Input from 'src/components/Input'

import PasswordInputStyled from '../styles/PasswordInput.styled'

interface IPasswordInputProps {
  name: string
  label: string
}

/**
 * Extended Input component
 *
 * The show password feature only works in android, because of the native
 * behavior of ios
 */

const PasswordInput: React.FC<IPasswordInputProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Input
      name={props.name}
      label={props.label}
      secureTextEntry={Platform.OS === 'ios' ? true : !isVisible}
    >
      {Platform.OS !== 'ios' && (
        <BorderlessButton onPress={() => setIsVisible(!isVisible)}>
          {isVisible ? (
            <PasswordInputStyled.EyeOffIcon />
          ) : (
            <PasswordInputStyled.EyeIcon />
          )}
        </BorderlessButton>
      )}
    </Input>
  )
}

export default PasswordInput
