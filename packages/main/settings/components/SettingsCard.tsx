import React from 'react'

import {
  SettingsCardContainer,
  SettingsCardIcon,
  SettingsCardTitle,
} from '../settings.styles'

export interface SettingsCardProps {
  title: string
  icon: JSX.Element
  onPress(): void
}

const SettingsCard: React.FC<SettingsCardProps> = (props) => {
  return (
    <SettingsCardContainer onPress={props.onPress}>
      <SettingsCardIcon>{props.icon}</SettingsCardIcon>

      <SettingsCardTitle>{props.title}</SettingsCardTitle>
    </SettingsCardContainer>
  )
}

export default SettingsCard
