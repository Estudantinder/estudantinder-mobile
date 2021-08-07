import React from 'react'

import {
  TargetProfileReportButtonContainer,
  TargetProfileReportButtonText,
} from '../styles'

export interface TargetProfileReportButtonProps {
  onPress(): void
}

const TargetProfileReportButton: React.FC<TargetProfileReportButtonProps> = (
  props
) => {
  return (
    <TargetProfileReportButtonContainer onPress={props.onPress}>
      <TargetProfileReportButtonText>
        Denunciar Perfil
      </TargetProfileReportButtonText>
    </TargetProfileReportButtonContainer>
  )
}

export default TargetProfileReportButton
