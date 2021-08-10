import { useRoute, Route, useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import StackPageTemplate from 'packages/components/StackPageTemplate'
import { TextAreaInput } from 'packages/edit-student-info/edit-student-info.styles'
import { useMainContext } from 'packages/main/context'
import { Subtitle } from 'packages/styles'

import { ReportTypes } from '../report_types'
import TargetProfileReportButton from './ReportButton'

export interface TargetProfileCustomReportPageRouteProps {
  studentId: string
}

const TargetProfileCustomReportPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { reportUser } = useMainContext()

  // using any because type definitions are wrong
  const router = useNavigation() as any

  const {
    params: { studentId },
  } = useRoute<
    Route<'TargetProfile', TargetProfileCustomReportPageRouteProps>
  >()

  const handleSubmit = async (data: { report?: string }) => {
    if (!data.report) return alert('Descreva o problema desse usuário')

    await reportUser({
      id: studentId,
      type: ReportTypes.custom,
      message: data.report,
    })

    router.popToTop()
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