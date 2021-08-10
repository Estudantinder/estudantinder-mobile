import React, { useMemo } from 'react'
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated'

import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet'

const TargetProfileCustomBackdrop = ({
  animatedIndex,
  style,
}: BottomSheetBackdropProps) => {
  const animatedOpacity = useMemo(
    () =>
      interpolate(animatedIndex, {
        inputRange: [0, 0.6],
        outputRange: [0, 0.6],
        extrapolate: Extrapolate.CLAMP,
      }),
    [animatedIndex]
  )

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: '#000000',
        opacity: animatedOpacity,
      },
    ],
    [style, animatedOpacity]
  )

  return <Animated.View style={containerStyle} />
}

export default TargetProfileCustomBackdrop
