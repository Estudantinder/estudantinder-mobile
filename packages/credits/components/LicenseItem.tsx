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

class LicenseItem extends React.PureComponent<LicenseItemProps> {
  public render() {
    return (
      <LicenseItemContainer>
        <LicenseItemTitle>{this.props.label}</LicenseItemTitle>

        <View style={{ height: 16 }} />

        <LicenseItemTextContainer>
          <LicenseItemText>{this.props.license}</LicenseItemText>
        </LicenseItemTextContainer>
      </LicenseItemContainer>
    )
  }
}

export default LicenseItem
