import React from 'react'

import MenuCard from 'packages/components/MenuCard'
import { Subtitle, Title, VerticalDivider } from 'packages/styles'

import { ReportTypes } from '../report_types'
import { TargetProfileSheetProps, TargetProfileSheets } from '../types'
import { TargetProfileBasicReportSheetProps } from './BasicReportSheet'

import { TargetProfileActionsSheetContainer } from '../styles'

export const targetProfileActionsSheetSize = '90%'

const TargetProfileActionsSheet: React.FC<TargetProfileSheetProps> = (
  props
) => {
  const navigateToBasicReport = (title: string, type: ReportTypes) => {
    const data: TargetProfileBasicReportSheetProps = {
      title,
      type: type,
    }

    return props.navigateTo(TargetProfileSheets.basicReport, data)
  }

  return (
    <TargetProfileActionsSheetContainer>
      <Title style={{ textAlign: 'center' }}>
        Nos ajude a entender qual é o problema
      </Title>

      <Subtitle style={{ paddingTop: 8, paddingBottom: 16 }}>
        Escolha uma das opções abaixo
      </Subtitle>

      <MenuCard
        iconName="user"
        onPress={() =>
          navigateToBasicReport(
            'Este é um perfil falso',
            ReportTypes.fakeProfile
          )
        }
      >
        Este é um perfil falso
      </MenuCard>
      <VerticalDivider />
      <MenuCard
        iconName="x-circle"
        onPress={() =>
          navigateToBasicReport(
            'Possui conteúdo inapropriado',
            ReportTypes.inappropriateContent
          )
        }
      >
        Possui conteúdo inapropriado
      </MenuCard>
      <VerticalDivider />
      <MenuCard
        iconName="flag"
        onPress={() =>
          navigateToBasicReport(
            'Span ou conteúdo comercial',
            ReportTypes.spanContent
          )
        }
      >
        Span ou conteúdo comercial
      </MenuCard>
      <VerticalDivider />
      <MenuCard
        iconName="users"
        onPress={() =>
          navigateToBasicReport(
            'Esta conta pode ter sido hackeada',
            ReportTypes.hackedAccount
          )
        }
      >
        Esta conta pode ter sido hackeada
      </MenuCard>
      <VerticalDivider />
      <MenuCard
        iconName="alert-triangle"
        onPress={() =>
          navigateToBasicReport(
            'Expressa intenções de suicídio',
            ReportTypes.selfHarm
          )
        }
      >
        Expressa intenções de suicídio
      </MenuCard>
      <VerticalDivider />
      <MenuCard iconName="help-circle" onPress={props.navigateToCustomPage}>
        Outro motivo
      </MenuCard>
      <VerticalDivider />
    </TargetProfileActionsSheetContainer>
  )
}

export default TargetProfileActionsSheet
