import React from 'react'
import { Platform } from 'react-native'

import { PageContainer, Title } from 'packages/styles'

import { ScrollMain } from './components.styles'
import GoBackButton from './GoBackButton'
import Scroll from './Scroll'

export interface StackPageTemplateProps {
  title: string
  scrollEnabled?: boolean
}

const StackPageTemplate: React.FC<StackPageTemplateProps> = (props) => {
  return (
    <PageContainer behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
      <Scroll scrollEnabled={props.scrollEnabled}>
        <GoBackButton />

        <ScrollMain>
          <Title>{props.title}</Title>

          {props.children}
        </ScrollMain>
      </Scroll>
    </PageContainer>
  )
}

export default StackPageTemplate
