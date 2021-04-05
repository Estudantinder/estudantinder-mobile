import React from 'react'
import { Text } from 'react-native'

import { MAIN_ROUTES } from 'packages/router/constants'
import theme from 'packages/styles/theme'

export interface TabBarLabelProps {
  focused: boolean
  route: { name: string }
}

export default function TabBarLabel(props: TabBarLabelProps) {
  let labelTitle

  if (props.route.name === MAIN_ROUTES.USER_PROFILE) labelTitle = 'Perfil'
  else labelTitle = props.route.name

  return (
    <Text
      style={{
        fontSize: 12,
        color: props.focused ? theme.colors.primary.purple : '#4f4f4f',
        marginTop: -6,
        marginBottom: 2,
        fontFamily: props.focused
          ? theme.fonts.primary
          : theme.fonts.input.text,
      }}
    >
      {labelTitle}
    </Text>
  )
}
