import * as utils from '../src'

describe('gvis utils export', () => {
  it('export is ok', () => {
    expect(utils.isArray).toBeDefined()
    expect(utils.isNumber).toBeDefined()
    expect(utils.isObject).toBeDefined()
    expect(utils.isPromise).toBeDefined()
    expect(utils.isString).toBeDefined()
    expect(utils.isSymbol).toBeDefined()
  })
})
