import DeletePhotoUseCase from '../use-cases/delete-photo'

export default class EditUserPhotosDeleteStack {
  private stack: Array<() => Promise<void>> = []

  private stackIndex: Array<number> = []

  addDeletePhoto(index: number) {
    if (this.stackIndex.includes(index)) return

    this.stack.push(() => DeletePhotoUseCase(index))
    this.stackIndex.push(index)
  }

  undoDeletePhoto(index: number) {
    if (!this.stackIndex.includes(index)) return

    const i = this.stackIndex.findIndex((value) => value === index)

    this.stackIndex.splice(i, 1)
    this.stack.splice(i, 1)
  }

  async resolveAll() {
    for (let index = 0; index < this.stack.length; index++) {
      await this.stack[index]()
    }
  }
}
