import AbstractRender from '../../src/abstract/AbstractRender'

describe('abstract class Element', () => {
  it('new', () => {
    const name = 'PureRender'

    class PureRender extends AbstractRender {
      name: string = name
    }

    let pureRender = new PureRender()

    expect(pureRender.name).toEqual(name)
  })
})
