import AbstractBase from '../../src/abstract/AbstractBase'

describe('Abstract Base Class', () => {
  it('create and destroyed', () => {
    class Test extends AbstractBase {
      name = 'test'
    }

    const test = new Test()

    expect(test.isDestroyed()).toEqual(false)

    test.destroy()

    expect(test.isDestroyed()).toEqual(true)
  })
})
