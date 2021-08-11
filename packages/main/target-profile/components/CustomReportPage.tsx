import { useRoute, Route, useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import StackPageTemplate from 'packages/components/StackPageTemplate'
import { TextAreaInput } from 'packages/edit-student-info/edit-student-info.styles'
import { useMainContext } from 'packages/main/context'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import { StyledForm, Subtitle } from 'packages/styles'

import { ReportTypes } from '../report_types'
import TargetProfileReportButton from './ReportButton'

export interface TargetProfileCustomReportPageRouteProps {
  studentId: string
}

const TargetProfileCustomReportPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { reportUser } = useMainContext()

  const router = useNavigation()

  const {
    params: { studentId },
  } = useRoute<
    Route<'TargetProfile', TargetProfileCustomReportPageRouteProps>
  >()

  const handleSubmit = async (data: { report?: string }) => {
    const report = data.report?.trim()

    if (!report) {
      return formRef.current?.setFieldError('report', 'Digite sua mensagem')
    }

    await reportUser({
      id: studentId,
      type: ReportTypes.custom,
      message: data.report,
    })

    router.navigate(AUTHENTICATED_ROUTES.REPORT_SUCCESS)
  }

  return (
    <StackPageTemplate title="Outro Motivo">
      <Subtitle style={{ paddingBottom: 52, paddingTop: 16 }}>
        Não se preocupe, sua denúncia será anônima. Você pode entrar em contato
        conosco pelo campo abaixo ou mandar um email para
        estudantinder@gmail.com
      </Subtitle>

      <StyledForm
        onSubmit={handleSubmit}
        ref={formRef}
        style={{ paddingBottom: 60 }}
      >
        <TextAreaInput
          label="Descreva o que está acontecendo"
          name="report"
          maxLength={256}
          info="Máximo de 256 caracteres"
          textAlignVertical="top"
          multiline
        />
      </StyledForm>

      <TargetProfileReportButton
        onPress={() => formRef.current?.submitForm()}
      />
    </StackPageTemplate>
  )
}

export default TargetProfileCustomReportPage
