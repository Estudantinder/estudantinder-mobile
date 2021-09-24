import React, { useMemo } from 'react'
import Animated, { Extrapolate, interpolateNode } from 'react-native-reanimated'

import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet'

const TargetProfileCustomBackdrop = ({
  animatedIndex,
  style,
}: BottomSheetBackdropProps) => {
  const animatedOpacity = useMemo(
    () =>
      interpolateNode(animatedIndex as never, {
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
