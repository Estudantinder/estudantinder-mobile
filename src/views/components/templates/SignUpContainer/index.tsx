import React from 'react'
import { Platform } from 'react-native'

import Styled from './styles'

const SignUpContainer: React.FC = (props) => {
  return (
    <Styled.Container
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={10}
    >
      <Styled.Scroll
        contentContainerStyle={{
          minHeight: '100%',
          width: '100%',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {props.children}
      </Styled.Scroll>
    </Styled.Container>
  )
}

export default SignUpContainer
