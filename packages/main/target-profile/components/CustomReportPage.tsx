import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import StackPageTemplate from 'packages/components/StackPageTemplate'
import { TextAreaInput } from 'packages/edit-student-info/edit-student-info.styles'
import { Subtitle } from 'packages/styles'

import TargetProfileReportButton from './ReportButton'

const TargetProfileCustomReportPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = (data: { report?: string }) => {
    data
  }

  return (
    <StackPageTemplate title="Outro Motivo" scrollEnabled>
      <Subtitle>
        Não se preocupe, sua denúncia será anônima. Você pode entrar em contato
        conosco pelo campo abaixo ou mandar um email para
        estudantinder@gmail.com
      </Subtitle>

      <Form onSubmit={handleSubmit} ref={formRef}>
        <TextAreaInput
          label="Descreva o que está acontecendo"
          name="report"
          maxLength={256}
          info="Máximo de 256 caracteres"
          textAlignVertical="top"
          multiline
        />
      </Form>

      <TargetProfileReportButton
        onPress={() => formRef.current?.submitForm()}
      />
    </StackPageTemplate>
  )
}

export default TargetProfileCustomReportPage
