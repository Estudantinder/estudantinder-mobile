import React from 'react'
import { View } from 'react-native'

import {
  LicenseItemContainer,
  LicenseItemText,
  LicenseItemTextContainer,
  LicenseItemTitle,
} from '../credits.styles'

export interface LicenseItemProps {
  license: string
  label: string
}

const LicenseItem: React.FC<LicenseItemProps> = (props) => {
  return (
    <LicenseItemContainer>
      <LicenseItemTitle>{props.label}</LicenseItemTitle>

      <View style={{ height: 16 }} />

      <LicenseItemTextContainer>
        <LicenseItemText>{props.license}</LicenseItemText>
      </LicenseItemTextContainer>
    </LicenseItemContainer>
  )
}

export default LicenseItem
