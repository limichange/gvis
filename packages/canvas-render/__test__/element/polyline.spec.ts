import Polyline from '../../src/element/Polyline'

describe('Element Polyline', () => {
  const polyline = new Polyline()

  it('create', () => {
    expect(polyline).toBeInstanceOf(Polyline)
  })

  it('clone', () => {
    expect(polyline.clone()).toBeInstanceOf(Polyline)
  })
})
