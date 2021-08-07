export enum TargetProfileSheets {
  startMenu = 0,
  actions = 1,
  basicReport = 2,
}

export interface TargetProfileSheetProps<T = any> {
  navigateTo(sheet: TargetProfileSheets, data?: T): void
  data: T
  onFinish(): void
  navigateToCustomPage(): void
}
