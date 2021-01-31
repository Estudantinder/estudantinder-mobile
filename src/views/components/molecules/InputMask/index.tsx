import React, { useState, useCallback } from 'react'
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text'

import Input, { InputComponentProps } from '../Input'

export type InputMaskProps = TextInputMaskProps & InputComponentProps

const InputMask: React.FC<InputMaskProps> = ({ type, ...rest }) => {
  const [value, setValue] = useState('')
  const [rawValue, setRawValue] = useState('')
  const handleOnChangeText = useCallback((maskedValue, unmaskedValue) => {
    setValue(maskedValue)
    setRawValue(unmaskedValue)
  }, [])
  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={value}
      onChangeText={handleOnChangeText}
      customTextInput={Input}
      customTextInputProps={{
        rawValue,
        ...rest,
      }}
      {...rest}
    />
  )
}
export default InputMask
