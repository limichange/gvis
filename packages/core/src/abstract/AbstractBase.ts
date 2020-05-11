import Bus from '@nextvis/bus'

export default abstract class AbstractBase extends Bus {
  abstract name: string
  #destroyed: boolean = false

  destroy() {
    this.clear()
    this.#destroyed = true
  }

  isDestroyed() {
    return this.#destroyed
  }
}
