import AbstractElement from '../../src/abstract/AbstractElement'

describe('abstract class Element', () => {
  it('new', () => {
    const type = 'PureElement'

    class PureElement extends AbstractElement {
      type: string = type
    }

    let pureElement = new PureElement()

    expect(pureElement.type).toEqual(type)
  })
})
