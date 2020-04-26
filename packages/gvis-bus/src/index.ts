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
    console.log(eventName, once)

    if (!this.store[eventName]) this.store[eventName] = []

    this.store[eventName].push({
      eventName,
      callback,
      once,
    })
  }

  off(eventName: string, callback: Function) {
    let callbackList = this.store[eventName]

    this.store[eventName] = callbackList.filter((eventConfig: EventConfig) => {
      return eventConfig.callback !== callback
    })
  }

  once(eventName: string, callback: Function) {
    return this.on(eventName, callback, true)
  }

  clear(eventName: string | undefined) {
    if (!eventName) {
      this.store = {}
    } else {
      let callbackList = this.getCallbackList(eventName)
      return callbackList.splice(0, callbackList.length)
    }
  }

  emit(eventName: string, ...args: any[]) {
    let callbackList = this.store[eventName]

    if (callbackList) {
      callbackList.forEach((eventConfig: EventConfig) => {
        eventConfig.callback(...args)

        if (eventConfig.once) {
          this.off(eventName, eventConfig.callback)
        }
      })
    }
  }
}
