import React, { useMemo } from 'react'
import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated'

import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet'

import { useToggleThemeContext } from 'packages/styles/context'

const CustomBackground: React.FC<BottomSheetBackgroundProps> = ({
  style,
  animatedIndex,
}) => {
  const { theme } = useToggleThemeContext()

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      animatedIndex.value,
      [0, 1],
      [theme.background.default, theme.background.default]
    ),
  }))
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle]
  )

  return <Animated.View pointerEvents="none" style={containerStyle} />
}

export default CustomBackground
