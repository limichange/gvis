import { AbstractRender } from '@nextvis/core'

export default class CanvasRender extends AbstractRender {
  name: string = 'CanvasRender'
  _ctx: CanvasRenderingContext2D | null = null

  setContext(ctx: CanvasRenderingContext2D | null) {
    this._ctx = ctx
  }

  addRect(x: number, y: number, w: number, h: number) {
    const path2d = new Path2D()
    path2d.rect(x, y, w, h)
    this.fill(path2d)
  }

  addImage(
    image: CanvasImageSource,
    x: number,
    y: number,
    w: number,
    h: number
  ) {
    this._ctx?.drawImage(image, 0, 0, 3000, 3000, x, y, w, h)
  }

  fill(path2d: Path2D) {
    const ctx = this._ctx!
    ctx.save()
    ctx.rotate(Math.PI / 18)
    ctx.fill(path2d)
    ctx.restore()
  }
}
