import { Gvis } from '../src'

describe('Gvis', () => {
  it('new', () => {
    let gvis = new Gvis({})

    expect(gvis).toBeDefined()
  })

  it('new', () => {
    let gvis = new Gvis({
      id: 'el',
    })

    expect(gvis).toBeDefined()
  })
})
