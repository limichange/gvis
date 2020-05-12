import { AbstractElement } from '@nextvis/core'

export default class Rect extends AbstractElement {
  name = 'rect'
  render(ctx: CanvasRenderingContext2D): void {
    // @todo
  }
  clone(): Rect {
    return new Rect()
  }
}
