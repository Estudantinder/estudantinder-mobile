import React from 'react'

import { Feather } from '@expo/vector-icons'
import Tooltip from 'rn-tooltip'

import { Row } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'

import {
  FiltersTooltipText,
  FiltersTopBarTitle,
  FiltersBackContainer,
} from './filters.styles'

export interface FiltersTopBar {
  closeDrawer(): void
}

const FiltersTopBar: React.FC<FiltersTopBar> = (props) => {
  const { theme } = useToggleThemeContext()

  return (
    <Row justifyContent="space-between" style={{ marginVertical: 16 }}>
      <Tooltip
        overlayColor={
          theme.name === 'dark' ? 'rgba(12, 12, 12, 0.6)' : undefined
        }
        backgroundColor={theme.background.default}
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
        <Feather name="help-circle" color={theme.icon.default} size={24} />
      </Tooltip>

      <FiltersTopBarTitle>Filtrar Alunos</FiltersTopBarTitle>

      <FiltersBackContainer onPress={props.closeDrawer}>
        <Feather name="x" color={theme.icon.default} size={24} />
      </FiltersBackContainer>
    </Row>
  )
}

export default FiltersTopBar
