import { error } from '../src/error'

describe('error', () => {
  it('throw', () => {
    expect(() => {
      error('lol')
    }).toThrowError()
  })
})
