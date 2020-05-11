import { AbstractElement } from '@nextvis/core'

export default class Circle extends AbstractElement {
  name = 'circle'
  render(ctx: CanvasRenderingContext2D): void {
    throw new Error('Method not implemented.')
  }
  clone(): Circle {
    return new Circle()
  }
}
