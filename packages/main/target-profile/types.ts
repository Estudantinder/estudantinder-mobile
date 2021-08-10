import { ReportTypes } from './report_types'

export enum TargetProfileSheets {
  startMenu = 0,
  actions = 1,
  basicReport = 2,
}

export interface TargetProfileSheetProps<T = any> {
  navigateTo(sheet: TargetProfileSheets, data?: T): void
  data: T
  navigateToCustomPage(): void
  reportUser(props: { type: ReportTypes; message?: string }): Promise<void>
}
