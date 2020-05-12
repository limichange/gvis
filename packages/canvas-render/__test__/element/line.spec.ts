import Line from '../../src/element/line'

describe('Element Line', () => {
  const line = new Line()

  it('create', () => {
    expect(line).toBeInstanceOf(Line)
  })

  it('clone', () => {
    expect(line.clone()).toBeInstanceOf(Line)
  })
})
