import AbstractElement from '../../src/abstract/AbstractElement'

describe('abstract class Element', () => {
  it('new', () => {
    const name = 'PureElement'

    class PureElement extends AbstractElement {
      name: string = name
    }

    let pureElement = new PureElement()

    expect(pureElement.name).toEqual(name)
  })
})
