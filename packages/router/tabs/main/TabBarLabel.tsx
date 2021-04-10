import React from 'react'
import { Text } from 'react-native'

import { MAIN_ROUTES } from 'packages/router/constants'
import { useToggleThemeContext } from 'packages/styles/context'
import { fonts } from 'packages/styles/theme'

export interface TabBarLabelProps {
  focused: boolean
  route: { name: string }
}

export default function TabBarLabel(props: TabBarLabelProps) {
  const { theme } = useToggleThemeContext()

  let labelTitle

  if (props.route.name === MAIN_ROUTES.USER_PROFILE) labelTitle = 'Perfil'
  else labelTitle = props.route.name

  return (
    <Text
      style={{
        fontSize: 12,
        color: props.focused ? theme.base.purple : '#4f4f4f',
        marginTop: -6,
        marginBottom: 2,
        fontFamily: props.focused ? fonts.primary : fonts.input.text,
      }}
    >
      {labelTitle}
    </Text>
  )
}
