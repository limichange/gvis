import { AbstractElement } from '../../../core/src'
export default class ImageElement extends AbstractElement {
  name: string = 'image'
  src: string = ''
  image: HTMLImageElement
  width: number = 0
  height: number = 0
  x: number = 0
  y: number = 0
  isLoad: boolean = false
  imageOnloadCallback: Function = () => {}

  constructor(
    src: string,
    x: number,
    y: number,
    width: number,
    height: number,
    callback: (imageElement: ImageElement) => void
  ) {
    super()

    const image = new Image()
    image.crossOrigin = 'Anonymous'
    image.src = src
    this.image = image
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.imageOnloadCallback = callback

    image.onload = this.imageOnloadHandler
  }

  imageOnloadHandler() {
    this.isLoad = true
    this.imageOnloadCallback(this)
  }

  render(ctx: CanvasRenderingContext2D) {
    if (!this.isLoad) {
      return
    }

    ctx.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
}
