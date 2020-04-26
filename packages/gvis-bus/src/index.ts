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

  on(eventName: string, callback: Function, once: boolean = false) {
    if (!this.store[eventName]) this.store[eventName] = []

    this.store[eventName].push({
      eventName,
      callback,
      once,
    })
  }

  off(eventName: string, callback: Function) {
    const { store } = this

    store[eventName] = store[eventName].filter((eventConfig: EventConfig) => {
      return eventConfig.callback !== callback
    })
  }

  once(eventName: string, callback: Function) {
    return this.on(eventName, callback, true)
  }

  clear(eventName?: string) {
    if (!eventName) {
      this.store = {}
    } else {
      const callbackList = this.getCallbackList(eventName)
      return callbackList.splice(0, callbackList.length)
    }
  }

  emit(eventName: string, ...args: any[]) {
    const callbackList = this.store[eventName]

    if (callbackList) {
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
    }
  }
}
