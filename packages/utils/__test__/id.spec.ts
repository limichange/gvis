import { id } from '../src/id'

describe('id', () => {
  it('ok', () => {
    let i = id()

    expect(i).toEqual(1)
  })
})
