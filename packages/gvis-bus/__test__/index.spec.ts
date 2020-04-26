import Bus from '../src/index'

describe('bus', () => {
  it('init', () => {
    const bus = new Bus()
    expect(bus.store).toEqual({})
  })

  it('add event handler', () => {
    const bus = new Bus()
    const fn = jest.fn()
    bus.on('click', fn)

    expect(bus.getCallbackList('click')).toHaveLength(1)
  })

  it('clear all event handler', () => {
    const bus = new Bus()
    const fn1 = jest.fn()

    bus.on('click', fn1)
    bus.clear()

    expect(bus.getCallbackList('click')).toHaveLength(0)

    bus.clear('click')
  })

  it('clear one type event handler', () => {
    const bus = new Bus()
    const fn1 = jest.fn()
    const fn2 = jest.fn()

    bus.on('click', fn1)
    bus.on('dbclick', fn2)
    bus.clear('click')

    expect(bus.getCallbackList('click')).toHaveLength(0)
    expect(bus.getCallbackList('dbclick')).toHaveLength(1)
  })

  it('emit event handler', () => {
    const bus = new Bus()
    const fn = jest.fn()
    bus.on('click', fn)
    bus.emit('click')

    expect(fn).toBeCalledTimes(1)
  })

  it('off event hander', () => {
    const bus = new Bus()
    const fn = jest.fn()
    bus.on('click', fn)
    bus.off('click', fn)
    bus.emit('click')

    expect(fn).not.toBeCalled()
  })

  it('call all event handler', () => {
    const bus = new Bus()
    const fn1 = jest.fn()
    bus.on('click', fn1)

    const fn2 = jest.fn()
    bus.on('click', fn2)

    bus.emit('click')

    expect(fn1).toBeCalled()
    expect(fn2).toBeCalled()
    expect(bus.getCallbackList('click').length).toEqual(2)
  })

  it('emit once event handler', () => {
    const fn1 = jest.fn()
    const bus = new Bus()

    bus.once('click', fn1)
    bus.emit('click')
    expect(fn1).toBeCalledTimes(1)
    expect(bus.getCallbackList('click').length).toEqual(0)
  })
})
