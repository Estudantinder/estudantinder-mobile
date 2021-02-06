import Student from 'main/entities/Student'

import { GENDERS_ENUM, SHIFTS } from 'shared/constants'

export default class StudentDataAdapter {
  student: Student

  constructor(props: Student) {
    this.student = new Student(props)
  }

  getCompactedName() {
    const nameArray = this.student.name.split(' ')

    const firstName = nameArray[0]

    const lastName = nameArray[nameArray.length - 1]

    return this.capitalize(`${firstName} ${lastName}`, 1)
  }

  getAge() {
    const ageDifMs = Date.now() - this.student.birth_date.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  getGender() {
    if (isNaN(this.student.gender as number)) return this.student.gender

    if (GENDERS_ENUM.FEMALE === Number(this.student.gender)) return 'Feminino'
    if (GENDERS_ENUM.MALE === Number(this.student.gender)) return 'Masculino'

    return this.student.gender
  }

  getShift() {
    if (SHIFTS.MORNING === this.student.shift) return 'Manhã'
    if (SHIFTS.AFTERNOON === this.student.shift) return 'Tarde'
    return String(this.student.shift)
  }

  capitalize(value: string, len = 4) {
    return value
      .toLowerCase()
      .split(' ')
      .map((word) => {
        if (word.length <= len) return word

        return word.charAt(0).toUpperCase() + word.substring(1)
      })
      .join(' ')
  }
}
