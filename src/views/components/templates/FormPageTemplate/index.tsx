import React from 'react'
import { Platform } from 'react-native'

import GoBackButton from 'views/components/atoms/GoBackButton'
import { Title } from 'views/styles/globalStyles'

import Styled from './styles'

export interface FormTemplateProps {
  title: string
}

const FormPageTemplate: React.FC<FormTemplateProps> = (props) => {
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
        <GoBackButton />

        <Styled.Main>
          <Title>{props.title}</Title>

          {props.children}
        </Styled.Main>
      </Styled.Scroll>
    </Styled.Container>
  )
}

export default FormPageTemplate
