import Path from '../../src/element/Path'

describe('Element Path', () => {
  const path = new Path()

  it('create', () => {
    expect(path).toBeInstanceOf(Path)
  })

  it('clone', () => {
    expect(path.clone()).toBeInstanceOf(Path)
  })
})
