import upperFirst from '../src/upperFirst'

describe('upperFirst', () => {
  it('should ', () => {
    expect(upperFirst('abc')).toEqual('Abc')
    expect(upperFirst(' abc')).toEqual(' abc')
  })
})
