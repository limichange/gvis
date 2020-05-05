import { AbstractRender } from '@nextvis/core'

export default class CanvasRender extends AbstractRender {
  name: string = 'CanvasRender'
  _ctx: CanvasRenderingContext2D | null = null

  setContext(ctx: CanvasRenderingContext2D | null) {
    this._ctx = ctx
  }
}
