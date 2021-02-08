export default class EmailExistsError extends Error {
  constructor(message: string) {
    super(message)
  }
}
