import React from 'react'

import Styled from './styles'

const Scroll: React.FC = ({ children }) => {
  return (
    <Styled.ScrollContainer
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
