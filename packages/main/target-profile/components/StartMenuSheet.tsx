import React from 'react'

import MenuCard from 'packages/components/MenuCard'

import { TargetProfileSheetProps, TargetProfileSheets } from '../types'

export const targetProfileStartMenuSheetSize = '15%'

const TargetProfileStartMenuSheet: React.FC<TargetProfileSheetProps> = (
  props
) => {
  return (
    <MenuCard
      iconName="flag"
      onPress={() => props.navigateTo(TargetProfileSheets.actions)}
    >
      Denunciar perfil
    </MenuCard>
  )
}

export default TargetProfileStartMenuSheet
