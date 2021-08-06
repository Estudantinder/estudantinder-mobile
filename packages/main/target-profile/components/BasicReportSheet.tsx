import React from 'react'

import { Title, Subtitle } from 'packages/styles'

import { TargetProfileSheetProps } from '../types'

import { TargetProfileActionsSheetContainer } from '../styles'

export const targetProfileBasicReportSheetSize = '35%'

export interface TargetProfileBasicReportSheetProps {
  title: string
}

const TargetProfileBasicReportSheet: React.FC<
  TargetProfileSheetProps<TargetProfileBasicReportSheetProps>
> = (props) => {
  return (
    <TargetProfileActionsSheetContainer>
      <Title style={{ textAlign: 'center' }}>{props.data.title}</Title>

      <Subtitle>
        Não se preocupe, sua denúncia será anônima.{'\n'}
        Obrigado pela contribuição.
      </Subtitle>
    </TargetProfileActionsSheetContainer>
  )
}

export default TargetProfileBasicReportSheet
