import React from 'react'

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'

import { MAIN_ROUTES } from '../../constants'

export interface TabBarIconProps {
  color: string
  size: number
  focused: boolean
  route: { name: string }
}

export default function TabBarIcon(props: TabBarIconProps) {
  if (props.route.name === MAIN_ROUTES.HOME) {
    return handleGetHomeIcon(props)
  }

  if (props.route.name === MAIN_ROUTES.USER_PROFILE) {
    return handleGetProfileIcon(props)
  }

  if (props.route.name === MAIN_ROUTES.MATCHES) {
    return handleGetMatchesIcon(props)
  }

  return handleGetDefaultIcon(props)
}

function handleGetHomeIcon(props: TabBarIconProps) {
  let iconName: 'home' | 'home-outline'

  if (props.focused) iconName = 'home'
  else iconName = 'home-outline'

  return (
    <MaterialCommunityIcons
      name={iconName}
      size={props.size}
      color={props.color}
    />
  )
}

function handleGetProfileIcon(props: TabBarIconProps) {
  let iconName: 'account' | 'account-outline'

  if (props.focused) iconName = 'account'
  else iconName = 'account-outline'

  return (
    <MaterialCommunityIcons
      name={iconName}
      size={props.size}
      color={props.color}
    />
  )
}

function handleGetMatchesIcon(props: TabBarIconProps) {
  let iconName: 'message-text' | 'message-text-outline'

  if (props.focused) iconName = 'message-text'
  else iconName = 'message-text-outline'

  return (
    <MaterialCommunityIcons
      name={iconName}
      size={props.size - 2}
      color={props.color}
    />
  )
}

function handleGetDefaultIcon(props: TabBarIconProps) {
  let iconName: 'square' | 'square-full'

  if (props.focused) iconName = 'square-full'
  else iconName = 'square'

  return <FontAwesome5 name={iconName} size={props.size} color={props.color} />
}
