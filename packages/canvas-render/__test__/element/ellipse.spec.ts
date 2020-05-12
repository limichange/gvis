import Ellipse from '../../src/element/ellipse'

describe('Element Ellipse', () => {
  const ellipse = new Ellipse()

  it('create', () => {
    expect(ellipse).toBeInstanceOf(Ellipse)
  })

  it('clone', () => {
    expect(ellipse.clone()).toBeInstanceOf(Ellipse)
  })
})
