import { AbstractElement } from '@nextvis/core'

export default class Polyline extends AbstractElement {
  name = 'polyline'
  render(ctx: CanvasRenderingContext2D): void {
    // @todo
  }
  clone(): Polyline {
    return new Polyline()
  }
}
