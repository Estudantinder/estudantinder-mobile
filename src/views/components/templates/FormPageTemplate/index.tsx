import React from 'react'
import { Platform } from 'react-native'

import GoBackButton from 'views/components/atoms/GoBackButton'
import Scroll from 'views/components/atoms/Scroll'
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
      <Scroll>
        <GoBackButton />

        <Styled.Main>
          <Title>{props.title}</Title>

          {props.children}
        </Styled.Main>
      </Scroll>
    </Styled.Container>
  )
}

export default FormPageTemplate
