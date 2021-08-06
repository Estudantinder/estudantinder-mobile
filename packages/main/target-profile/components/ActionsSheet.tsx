import React from 'react'

import MenuCard from 'packages/components/MenuCard'
import { Subtitle, Title, VerticalDivider } from 'packages/styles'

import { TargetProfileSheetProps, TargetProfileSheets } from '../types'
import { TargetProfileBasicReportSheetProps } from './BasicReportSheet'

import { TargetProfileActionsSheetContainer } from '../styles'

export const targetProfileActionsSheetSize = '85%'

const TargetProfileActionsSheet: React.FC<TargetProfileSheetProps> = (
  props
) => {
  const navigateToBasicReport = (title: string) => {
    const data: TargetProfileBasicReportSheetProps = {
      title,
    }

    return props.navigateTo(TargetProfileSheets.basicReport, data)
  }

  return (
    <TargetProfileActionsSheetContainer>
      <Title style={{ textAlign: 'center' }}>
        Nos ajude a entender qual é o problema
      </Title>

      <Subtitle>Escolha uma das opções abaixo</Subtitle>

      <MenuCard
        iconName="user"
        onPress={() => navigateToBasicReport('Este é um perfil falso')}
      >
        Este é um perfil falso
      </MenuCard>
      <VerticalDivider />
      <MenuCard
        iconName="x-circle"
        onPress={() => navigateToBasicReport('Possui conteúdo inapropriado')}
      >
        Possui conteúdo inapropriado
      </MenuCard>
      <VerticalDivider />
      <MenuCard
        iconName="flag"
        onPress={() => navigateToBasicReport('Spam ou conteúdo comercial')}
      >
        Spam ou conteúdo comercial
      </MenuCard>
      <VerticalDivider />
      <MenuCard
        iconName="users"
        onPress={() =>
          navigateToBasicReport('Esta conta pode ter sido hackeada')
        }
      >
        Esta conta pode ter sido hackeada
      </MenuCard>
      <VerticalDivider />
      <MenuCard
        iconName="alert-triangle"
        onPress={() => navigateToBasicReport('Expressa intenções de suicídio')}
      >
        Expressa intenções de suicídio
      </MenuCard>
      <VerticalDivider />
      <MenuCard
        iconName="help-circle"
        onPress={() => navigateToBasicReport('Outro motivo')}
      >
        Outro motivo
      </MenuCard>
      <VerticalDivider />
    </TargetProfileActionsSheetContainer>
  )
}

export default TargetProfileActionsSheet
