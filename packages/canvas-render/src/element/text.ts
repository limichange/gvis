import { AbstractElement } from '@nextvis/core'

export default class Text extends AbstractElement {
  name = 'text'
  render(ctx: CanvasRenderingContext2D): void {
    // @todo
  }
  clone(): Text {
    return new Text()
  }
}
