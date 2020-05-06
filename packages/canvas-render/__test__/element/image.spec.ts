import ImageElement from '../../src/element/image'
import createCanvas from '../utils/createCanvas'

describe('element image', () => {
  it('download image', (done) => {
    const { ctx } = createCanvas()

    const callbackFn = jest.fn(() => {
      expect(callbackFn).toBeCalled()
      done()
    })

    const imageElement = new ImageElement('image url', 0, 0, 0, 0, callbackFn)

    imageElement.imageOnloadHandler()

    imageElement.render(ctx!)
  })
})
