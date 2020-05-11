import {
  isObject,
  isArray,
  isPromise,
  isSymbol,
  isNumber,
  isString,
  isFunction,
  isInteger,
} from '../src/type'

describe('gvis utils type', () => {
  it('check Object', () => {
    expect(isObject({})).toEqual(true)
  })

  it('check Array', () => {
    expect(isArray([])).toEqual(true)
  })

  it('check Promise', () => {
    expect(isPromise(new Promise(() => {}))).toEqual(true)
  })

  it('check Symbol', () => {
    expect(isSymbol(Symbol())).toEqual(true)
  })

  it('check Number', () => {
    expect(isNumber(1)).toEqual(true)
  })

  it('check String', () => {
    expect(isString('ok')).toEqual(true)
  })

  it('check Function', () => {
    expect(isFunction(() => {})).toEqual(true)
  })

  it('check Integer', () => {
    expect(isInteger(0)).toEqual(true)
    expect(isInteger(12)).toEqual(true)
    expect(isInteger(-12)).toEqual(true)
    expect(isInteger(1.2)).toEqual(false)
    expect(isInteger(-1.2)).toEqual(false)
  })
})
