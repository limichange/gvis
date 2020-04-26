import each from '../src/objectEach'

describe('each', () => {
  it('null', () => {
    let fn = jest.fn()
    each(null, fn)
    expect(fn).not.toBeCalled()
  })

  it('each object', () => {
    let i = 0
    const object: Record<string, number> = {
      a: 1,
      b: 2,
      c: 3,
    }

    each(object, (item, j) => {
      expect(item).toEqual(object[j])
      i++
    })
    expect(i).toEqual(3)
  })

  it('each break', () => {
    const b = { a: 1, b: 2, c: 3 }
    let j = 0
    each(b, (v, k) => {
      if (k === 'b') {
        return false
      }
      j++
    })
    expect(j).toEqual(1)
  })
})
