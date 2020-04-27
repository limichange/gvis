const offscreenCtxStore: Record<
  string,
  CanvasRenderingContext2D | null
> = {}

export function getOffScreenContext(
  key: string = 'global',
  config = {
    width: 1,
    height: 1,
  }
) {
  if (!offscreenCtxStore[key]) {
    const canvas = document.createElement('canvas')
    canvas.width = config.width
    canvas.height = config.height
    offscreenCtxStore[key] = canvas.getContext('2d')
  }
  return offscreenCtxStore[key]
}
