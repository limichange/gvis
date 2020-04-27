import Bus from '@nextvis/bus'
import CanvasRender from '@nextvis/canvasRender'

type GvisConfig = {
  el?: string | HTMLElement
  width?: number
  height?: number
  autoUpdate?: boolean
}

export default class Gvis extends Bus {
  cfg: GvisConfig = {
    autoUpdate: true,
  }

  render = new CanvasRender()

  constructor(cfg?: GvisConfig) {
    super()
    Object.assign(this.cfg, cfg)
  }
}
