import Bus from '@nextvis/bus'
import CanvasRender from '@nextvis/canvas-render'
import { isString } from '@nextvis/utils'
import logger from './utils/logger'
import { createHTMLElement } from './utils/element'

type GvisConfig = {
  id?: string
  el?: HTMLElement
  width?: number
  height?: number
  autoUpdate?: boolean
}

export default class Gvis extends Bus {
  cfg: GvisConfig = {
    autoUpdate: true,
  }

  el: HTMLElement | null = null
  canvasEl: HTMLCanvasElement | null = null

  render: CanvasRender = new CanvasRender()

  constructor(cfg: GvisConfig) {
    super()

    // check config id
    if (!cfg.el && __DEV__ && !isString(cfg.id)) {
      logger.warn(`Config id is unvalid: ${cfg.id}`)
    }

    // find element
    this.el = cfg.el ?? document.querySelector(`#${cfg.id}`)

    // check element is ok
    if (!this.el && __DEV__) {
      logger.warn(`Element not found or is empty: ${cfg.id}`)
      return
    }

    // save config
    Object.assign(this.cfg, cfg)

    this.canvasEl = this.createCanvasElement()
    this.render.setContext(this.canvasEl.getContext('2d'))
    this.emit('init')
  }

  private createCanvasElement() {
    const el = this.el!
    const { width, height } = el.getBoundingClientRect()

    return createHTMLElement('canvas', {
      parent: this.el,
      width,
      height,
    }) as HTMLCanvasElement
  }

  addRect(x: number, y: number, w: number, h: number) {
    this.render.addRect(x, y, w, h)
  }

  addImage() {
    const image = new Image()
    image.crossOrigin = 'Anonymous'
    image.src =
      '//pbs.twimg.com/media/EXQvNpRUEAEKvnU?format=jpg&name=4096x4096'

    image.addEventListener('load', (e: Event) => {
      console.log(e)
      this.render.addImage(image, 30, 30, 300, 300)
    })
  }

  remove() {
    // todo
  }

  register() {
    // todo
  }
}
