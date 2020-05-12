import Circle from '../../src/element/Circle'

describe('Element Circle', () => {
  const circle = new Circle()

  it('create', () => {
    expect(circle).toBeInstanceOf(Circle)
  })

  it('clone', () => {
    expect(circle.clone()).toBeInstanceOf(Circle)
  })
})
