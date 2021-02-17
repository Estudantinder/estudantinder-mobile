import React from 'react'
import { Platform } from 'react-native'

import { PageContainer, Row, Title } from 'packages/styles'

import { ScrollMain } from './components.styles'
import GoBackButton from './GoBackButton'
import Scroll from './Scroll'

export interface StackPageTemplateProps {
  title: string
  scrollEnabled?: boolean
  withoutPadding?: boolean
}

const StackPageTemplate: React.FC<StackPageTemplateProps> = (props) => {
  return (
    <PageContainer
      withoutPadding={props.withoutPadding}
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
    >
      <Scroll scrollEnabled={props.scrollEnabled}>
        <GoBackButton
          style={{ paddingHorizontal: props.withoutPadding ? 16 : undefined }}
        />

        <ScrollMain>
          <Row
            style={{ paddingHorizontal: props.withoutPadding ? 16 : undefined }}
            justifyContent="center"
          >
            <Title>{props.title}</Title>
          </Row>

          {props.children}
        </ScrollMain>
      </Scroll>
    </PageContainer>
  )
}

export default StackPageTemplate
