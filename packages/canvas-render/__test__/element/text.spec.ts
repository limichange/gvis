import Text from '../../src/element/text'

describe('Element Text', () => {
  const text = new Text()

  it('create', () => {
    expect(text).toBeInstanceOf(Text)
  })

  it('clone', () => {
    expect(text.clone()).toBeInstanceOf(Text)
  })
})
