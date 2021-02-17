import React from 'react'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import ShowTargetStudent from 'packages/student-info/show-target-info/ShowTargetInfo'
import { Row, Subtitle } from 'packages/styles'

import { useSignUpContext } from '../context'

const SignUpProfile: React.FC = () => {
  const context = useSignUpContext()

  if (!context.user)
    return (
      <StackPageTemplate title="Algo deu errado">
        <Subtitle>
          Confirme se você preencheu todas as informações no cadastro
        </Subtitle>
      </StackPageTemplate>
    )

  return (
    <StackPageTemplate title="Seu perfil ficará assim" withoutPadding>
      <ShowTargetStudent student={context.user}>
        <Row style={{ padding: 16 }}>
          <PrimaryButton onPress={() => 0}>CADASTRAR</PrimaryButton>
        </Row>
      </ShowTargetStudent>
    </StackPageTemplate>
  )
}

export default SignUpProfile
