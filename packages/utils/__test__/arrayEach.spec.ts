import each from '../src/arrayEach'

describe('each', () => {
  it('null', () => {
    let fn = jest.fn()
    each(null, fn)
    expect(fn).not.toBeCalled()
  })

  it('each array', () => {
    let i = 0
    const a = [1, 2, 3, 4]
    each<number>(a, (item: number, j) => {
      expect(item).toEqual(a[j])
      i++
    })
    expect(i).toEqual(a.length)
  })

  it('each break', () => {
    const a = [1, 2, 3, 4, 5]
    let j = 0
    each(a, (item, i) => {
      if (i === 2) {
        return false
      }
      j++
    })
    expect(j).toEqual(2)
  })
})
