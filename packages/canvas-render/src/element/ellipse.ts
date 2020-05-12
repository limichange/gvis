import { AbstractElement } from '@nextvis/core'

export default class Ellipse extends AbstractElement {
  name = 'ellipse'
  render(ctx: CanvasRenderingContext2D): void {
    // @todo
  }
  clone(): Ellipse {
    return new Ellipse()
  }
}
