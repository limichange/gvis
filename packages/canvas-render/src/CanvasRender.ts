import { AbstractRender } from '@nextvis/core'
import ImageElement from './element/image'

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

  addImage({
    src,
    x,
    y,
    width,
    height,
  }: {
    src: string
    x: number
    y: number
    width: number
    height: number
  }) {
    return new ImageElement(src, x, y, width, height, (imageElement) => {
      imageElement.render(this._ctx!)
    })
  }

  fill(path2d: Path2D) {
    const ctx = this._ctx!
    ctx.save()
    ctx.rotate(Math.PI / 18)
    ctx.fill(path2d)
    ctx.restore()
  }
}
