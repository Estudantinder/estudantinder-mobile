import { GENDERS } from 'packages/entities/Gender'
import { SHIFTS } from 'packages/entities/Shift'
import Student from 'packages/entities/Student'
import capitalize from 'packages/utils/capitalize'

export default class StudentDataAdapter {
  student: Student

  constructor(props: Student) {
    this.student = new Student(props)
  }

  getCompactedName() {
    const nameArray = this.student.name.split(' ')

    const firstName = nameArray[0]

    const lastName = nameArray[nameArray.length - 1]

    return capitalize(`${firstName} ${lastName}`, 1)
  }

  getAge() {
    const ageDifMs = Date.now() - this.student.birth_date.getTime()

    const ageDate = new Date(ageDifMs)

    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  getGender() {
    if (isNaN(this.student.gender as number)) return this.student.gender

    if (GENDERS.FEMALE === Number(this.student.gender)) return 'Feminino'
    if (GENDERS.MALE === Number(this.student.gender)) return 'Masculino'

    return this.student.gender
  }

  getShift() {
    if (SHIFTS.MORNING === this.student.shift) return 'Manhã'
    if (SHIFTS.AFTERNOON === this.student.shift) return 'Tarde'
    return String(this.student.shift)
  }
}
