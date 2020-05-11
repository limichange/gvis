import { AbstractElement } from '@nextvis/core'

export default class Polyline extends AbstractElement {
  name = 'polyline'
  render(ctx: CanvasRenderingContext2D): void {
    throw new Error('Method not implemented.')
  }
  clone(): Polyline {
    return new Polyline()
  }
}
