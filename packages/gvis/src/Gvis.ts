import Bus from '@nextvis/bus'
import CanvasRender from '@nextvis/canvasRender'
import { isString } from '@nextvis/utils'
import logger from './utils/logger'

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

  el: HTMLElement | null

  render = new CanvasRender()

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

    this.emit('init')
  }

  add() {
    // todo
  }

  remove() {
    // todo
  }

  register() {
    // todo
  }
}
