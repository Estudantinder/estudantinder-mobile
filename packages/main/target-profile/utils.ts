import TargetProfileActionsSheet, {
  targetProfileActionsSheetSize,
} from './components/ActionsSheet'
import TargetProfileBasicReportSheet, {
  targetProfileBasicReportSheetSize,
} from './components/BasicReportSheet'
import TargetProfileStartMenuSheet, {
  targetProfileStartMenuSheetSize,
} from './components/StartMenuSheet'
import { TargetProfileSheets, TargetProfileSheetProps } from './types'

export const targetProfileSheets: Record<
  TargetProfileSheets,
  {
    component: React.FC<TargetProfileSheetProps>
    size: string
  }
> = {
  [TargetProfileSheets.startMenu]: {
    component: TargetProfileStartMenuSheet,
    size: targetProfileStartMenuSheetSize,
  },
  [TargetProfileSheets.actions]: {
    component: TargetProfileActionsSheet,
    size: targetProfileActionsSheetSize,
  },
  [TargetProfileSheets.basicReport]: {
    component: TargetProfileBasicReportSheet,
    size: targetProfileBasicReportSheetSize,
  },
}
