import Bus from '@nextvis/bus'
import CanvasRender from '@nextvis/canvasRender'
import { isString } from '@nextvis/utils'

type GvisConfig = {
  id?: string
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
    if (__DEV__ && !isString(cfg.id)) {
      console.warn(`Config id is unvalid: ${cfg.id}`)
    }

    // find element
    this.el = document.querySelector(`#${cfg.id}`)

    // check element is ok
    if (!this.el && __DEV__) {
      console.warn(
        `Element not found or is empty: ${cfg.id}`
      )
      return
    }

    // save config
    Object.assign(this.cfg, cfg)
  }
}
