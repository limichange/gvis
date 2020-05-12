import Rect from '../../src/element/rect'

describe('Element Rect', () => {
  const rect = new Rect()

  it('create', () => {
    expect(rect).toBeInstanceOf(Rect)
  })

  it('clone', () => {
    expect(rect.clone()).toBeInstanceOf(Rect)
  })
})
