interface EventConfig {
  once: boolean
  callback: Function
  eventName: string
}

export default class Bus {
  store: Record<string, EventConfig[]> = {}

  getCallbackList(eventName: string) {
    const { store } = this

    if (!store[eventName]) store[eventName] = []

    return store[eventName]
  }

  on(
    eventName: string,
    callback: Function,
    once: boolean = false
  ) {
    this.getCallbackList(eventName).push({
      eventName,
      callback,
      once,
    })

    return this
  }

  off(eventName: string, callback: Function) {
    this.store[eventName] = this.getCallbackList(
      eventName
    ).filter((eventConfig: EventConfig) => {
      return eventConfig.callback !== callback
    })

    return this
  }

  once(eventName: string, callback: Function) {
    return this.on(eventName, callback, true)
  }

  clear(eventName?: string) {
    if (!eventName) {
      this.store = {}
    } else {
      const callbackList = this.getCallbackList(eventName)
      callbackList.splice(0, callbackList.length)
    }

    return this
  }

  emit(eventName: string, ...args: any[]) {
    const callbackList = this.getCallbackList(eventName)

    callbackList
      .filter((eventConfig: EventConfig) => {
        eventConfig.callback(...args)

        if (eventConfig.once) {
          return eventConfig
        }
      })
      .forEach((eventConfig) => {
        this.off(eventName, eventConfig.callback)
      })

    return this
  }
}
