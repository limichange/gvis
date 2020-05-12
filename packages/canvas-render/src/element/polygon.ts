import { AbstractElement } from '@nextvis/core'

export default class Polygon extends AbstractElement {
  name = 'polygon'
  render(ctx: CanvasRenderingContext2D): void {
    // @todo
  }
  clone(): Polygon {
    return new Polygon()
  }
}
