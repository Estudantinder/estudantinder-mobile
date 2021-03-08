import React from 'react'

import {
  MenuCardContainer,
  MenuCardIcon,
  MenuCardTitle,
} from './components.styles'

export interface MenuCardProps {
  children: string
  icon: JSX.Element
  onPress(): void
}

const MenuCard: React.FC<MenuCardProps> = (props) => {
  return (
    <MenuCardContainer onPress={props.onPress}>
      <MenuCardIcon>{props.icon}</MenuCardIcon>

      <MenuCardTitle>{props.children}</MenuCardTitle>
    </MenuCardContainer>
  )
}

export default MenuCard
