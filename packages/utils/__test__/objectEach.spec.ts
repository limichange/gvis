import each from '../src/objectEach'

describe('each', () => {
  it('null', () => {
    let fn = jest.fn()
    each(null, fn)
    expect(fn).not.toBeCalled()
  })

  it('each object', () => {
    let fn = jest.fn()

    function A() {}

    A.prototype.name = 'test'

    let object = new (A as any)()

    Object.assign(object, {
      name2: 'test2',
      name3: 'test3',
    })

    each(object, (item, j) => {
      expect(item).toEqual(object[j])
      fn()
    })
    expect(fn).toBeCalledTimes(2)
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
