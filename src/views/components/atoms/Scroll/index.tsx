import React from 'react'
import { ScrollViewProps } from 'react-native'

import Styled from './styles'

const Scroll: React.FC<ScrollViewProps> = ({ children, ...rest }) => {
  return (
    <Styled.ScrollContainer
      {...rest}
      contentContainerStyle={{
        minHeight: '100%',
        width: '100%',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {children}
    </Styled.ScrollContainer>
  )
}

export default Scroll
