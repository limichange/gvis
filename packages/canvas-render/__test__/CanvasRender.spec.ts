import CanvasRender from '../src/CanvasRender'
import ImageElement from '../src/element/image'

describe('CanvasRender', () => {
  const canvasRender = new CanvasRender()
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  it('setContext', () => {
    canvasRender.setContext(ctx)

    expect(canvasRender._ctx).toBeInstanceOf(CanvasRenderingContext2D)
  })

  it('addImage', () => {
    const image = canvasRender.addImage({
      src: 'test image',
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    })

    expect(image).toBeInstanceOf(ImageElement)
  })
})
