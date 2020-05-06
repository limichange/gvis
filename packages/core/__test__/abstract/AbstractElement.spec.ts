import AbstractElement from '../../src/abstract/AbstractElement'

describe('abstract class Element', () => {
  it('new', () => {
    const name = 'PureElement'

    class PureElement extends AbstractElement {
      render(ctx: CanvasRenderingContext2D): void {}
      name: string = name
    }

    let pureElement = new PureElement()

    expect(pureElement.name).toEqual(name)
  })
})
