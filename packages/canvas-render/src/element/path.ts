import { AbstractElement } from '@nextvis/core'

export default class Path extends AbstractElement {
  name = 'path'
  render(ctx: CanvasRenderingContext2D): void {
    // @todo
  }
  clone(): Path {
    return new Path()
  }
}
