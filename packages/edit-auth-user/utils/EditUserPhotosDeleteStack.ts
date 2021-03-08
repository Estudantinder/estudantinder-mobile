import DeletePhotoUseCase from '../use-cases/delete-photo'

export default class EditUserPhotosDeleteStack {
  private stack: Array<number> = []

  getStack() {
    return this.stack
  }

  addDeletePhoto(index: number) {
    if (this.stack.includes(index)) return

    this.stack = [...this.stack, index]
  }

  undoDeletePhoto(index: number) {
    if (!this.stack.includes(index)) return

    const i = this.stack.findIndex((value) => value === index)

    this.stack.splice(i, 1)
  }

  async resolveAll() {
    for (let index = 0; index < this.stack.length; index++) {
      await DeletePhotoUseCase(this.stack[index])
    }

    this.stack = []
  }
}
