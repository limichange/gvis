import Path from '../../src/element/path'

describe('Element Path', () => {
  const path = new Path()

  it('create', () => {
    expect(path).toBeInstanceOf(Path)
  })

  it('clone', () => {
    expect(path.clone()).toBeInstanceOf(Path)
  })
})
