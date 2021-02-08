export enum SHIFTS {
  MORNING = 1,
  AFTERNOON = 2,
}

export default class Shift {
  public shift

  constructor(shift: SHIFTS) {
    this.shift = shift
  }

  getShiftName(): string {
    if (SHIFTS.MORNING === this.shift) return 'Manhã'
    if (SHIFTS.AFTERNOON === this.shift) return 'Tarde'

    return String(this.shift)
  }
}
