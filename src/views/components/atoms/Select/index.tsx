import React from 'react'
import Picker, { PickerSelectProps } from 'react-native-picker-select'

import { InputLabel } from 'views/styles/globalStyles'

import Styled from './styles'

export interface SelectProps extends PickerSelectProps {
  label: string
}

const Select: React.FC<SelectProps> = ({ label, ...rest }) => {
  return (
    <Styled.Container>
      <InputLabel>{label}</InputLabel>
      <Styled.PickerBackground>
        <Picker
          style={{
            inputAndroid: {
              color: '#000',
            },
          }}
          {...rest}
        />
      </Styled.PickerBackground>
    </Styled.Container>
  )
}

export default Select
