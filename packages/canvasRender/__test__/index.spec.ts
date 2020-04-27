import CanvasRender from '../src/index'

describe('canvasRender', () => {
  it('new', () => {
    let canvasRender = new CanvasRender()

    expect(canvasRender).toBeDefined()
  })
})
