import React from 'react'

import { Feather } from '@expo/vector-icons'
import Tooltip from 'rn-tooltip'

import { Row } from 'packages/styles'

import {
  FiltersTooltipText,
  FiltersTopBarTitle,
  FiltersBackContainer,
} from './filters.styles'

export interface FiltersTopBar {
  closeDrawer(): void
}

const FiltersTopBar: React.FC<FiltersTopBar> = (props) => {
  return (
    <Row justifyContent="space-between" style={{ marginBottom: 16 }}>
      <Tooltip
        backgroundColor="#fff"
        height={100}
        width={220}
        actionType="press"
        popover={
          <FiltersTooltipText>
            Todas as preferências são opcionais, se deixadas em branco serão
            consideradas todas as opções.
          </FiltersTooltipText>
        }
      >
        <Feather name="help-circle" color="#2d2d2d" size={24} />
      </Tooltip>

      <FiltersTopBarTitle>Filtrar Alunos</FiltersTopBarTitle>

      <FiltersBackContainer onPress={props.closeDrawer}>
        <Feather name="x" color="#2d2d2d" size={24} />
      </FiltersBackContainer>
    </Row>
  )
}

export default FiltersTopBar
