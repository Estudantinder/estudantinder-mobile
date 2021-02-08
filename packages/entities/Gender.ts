export enum GENDERS {
  FEMALE = 0,
  MALE = 1,
}

export type IGender = GENDERS | string

export default class Gender {
  public gender

  constructor(gender: IGender) {
    this.gender = gender
  }

  getGenderName(): string {
    if (isNaN(this.gender as number)) return String(this.gender)

    const numGender = Number(this.gender)

    if (GENDERS.FEMALE === numGender) return 'Feminino'
    if (GENDERS.MALE === numGender) return 'Masculino'

    return String(this.gender)
  }

  setGenderByName(gender: string): void {
    if (gender.toUpperCase() === 'FEMININO') {
      this.gender = GENDERS.FEMALE

      return
    }

    if (gender.toUpperCase() === 'MASCULINO') {
      this.gender = GENDERS.MALE

      return
    }

    this.gender = gender
  }
}

new Gender(GENDERS.FEMALE).getGenderName()
