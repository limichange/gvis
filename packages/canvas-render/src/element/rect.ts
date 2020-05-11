import { AbstractElement } from '@nextvis/core'

export default class Rect extends AbstractElement {
  name = 'rect'
  render(ctx: CanvasRenderingContext2D): void {
    throw new Error('Method not implemented.')
  }
  clone(): Rect {
    return new Rect()
  }
}
