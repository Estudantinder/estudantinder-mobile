import React, { useMemo } from 'react'
import Animated, { interpolateColors } from 'react-native-reanimated'

import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet'

import { useToggleThemeContext } from 'packages/styles/context'

const TargetProfileCustomBackground = ({
  animatedIndex,
  style,
}: BottomSheetBackgroundProps) => {
  const { theme } = useToggleThemeContext()

  // animated variables
  const animatedBackground = useMemo(
    () =>
      interpolateColors(animatedIndex, {
        inputRange: [0, 1],
        outputColorRange: [theme.background.default, theme.background.default],
      }),
    [animatedIndex, theme.background.default]
  )

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: animatedBackground,
        borderRadius: 14,
      },
    ],
    [style, animatedBackground]
  )

  // making as any because wrong type definitions from the package
  return <Animated.View style={containerStyle as any} />
}

export default TargetProfileCustomBackground
