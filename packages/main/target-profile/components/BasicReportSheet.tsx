import React from 'react'

import { Title, Subtitle } from 'packages/styles'

import { ReportTypes } from '../report_types'
import { TargetProfileSheetProps } from '../types'
import TargetProfileReportButton from './ReportButton'

import { TargetProfileBasicReportSheetContainer } from '../styles'

export const targetProfileBasicReportSheetSize = '35%'

export interface TargetProfileBasicReportSheetProps {
  title: string
  type: ReportTypes
}

const TargetProfileBasicReportSheet: React.FC<
  TargetProfileSheetProps<TargetProfileBasicReportSheetProps>
> = (props) => {
  return (
    <TargetProfileBasicReportSheetContainer>
      <Title style={{ textAlign: 'center' }}>{props.data.title}</Title>

      <Subtitle>
        Não se preocupe, sua denúncia será anônima.{'\n'}
        Obrigado pela contribuição.
      </Subtitle>

      <TargetProfileReportButton
        onPress={() => {
          props.reportUser({ type: props.data.type })
        }}
      />
    </TargetProfileBasicReportSheetContainer>
  )
}

export default TargetProfileBasicReportSheet
