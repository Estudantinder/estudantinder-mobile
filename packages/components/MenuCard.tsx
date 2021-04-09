import React from 'react'

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import {
  MenuCardContainer,
  MenuCardIcon,
  MenuCardTitle,
} from './components.styles'

export interface MenuCardProps {
  children: string
  iconName?: string
  customIcon?: JSX.Element
  onPress(): void
}

const MenuCard: React.FC<MenuCardProps> = (props) => {
  const isCustomIcon = !!props.customIcon || !props.iconName

  const theme = useTheme()

  const getIcon = () => {
    if (isCustomIcon) return props.customIcon

    return (
      <Feather
        name={props.iconName || ''}
        color={theme.dark_purple}
        size={28}
      />
    )
  }

  return (
    <MenuCardContainer onPress={props.onPress}>
      <MenuCardIcon>{getIcon()}</MenuCardIcon>

      <MenuCardTitle>{props.children}</MenuCardTitle>
    </MenuCardContainer>
  )
}

export default MenuCard
