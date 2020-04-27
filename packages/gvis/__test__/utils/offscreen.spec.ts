import { getOffScreenContext } from '../../src/utils/offscreen'

describe('index', () => {
  it('export is ok', () => {
    const ctx = getOffScreenContext()
    const ctx2 = getOffScreenContext()

    expect(ctx).toBeDefined()
    expect(ctx).toEqual(ctx2)
  })
})
