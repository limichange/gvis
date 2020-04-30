import { createHTMLElement } from './element'

const offscreenCtxStore: Record<string, CanvasRenderingContext2D | null> = {}

export function getOffScreenContext(
  key: string = 'global',
  config = {
    width: 1,
    height: 1,
  }
) {
  if (!offscreenCtxStore[key]) {
    const canvas = createHTMLElement('canvas', config) as HTMLCanvasElement

    offscreenCtxStore[key] = canvas.getContext('2d')
  }
  return offscreenCtxStore[key]
}
