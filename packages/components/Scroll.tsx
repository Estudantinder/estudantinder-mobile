import React from 'react'
import { ScrollViewProps, StyleProp, ViewStyle } from 'react-native'

import { ScrollContainer } from './components.styles'

const Scroll: React.FC<ScrollViewProps> = ({ children, ...rest }) => {
  const contextContainerStyle: StyleProp<ViewStyle> = {
    minHeight: '100%',
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
  }

  return (
    <ScrollContainer {...rest} contentContainerStyle={contextContainerStyle}>
      {children}
    </ScrollContainer>
  )
}

export default Scroll
