const { log, warn } = console

export class Logger {
  isDev: boolean

  constructor({ isDev }: { isDev: boolean }) {
    this.isDev = isDev
  }

  log(message: any, ...optionalParams: any[]) {
    log(message, ...optionalParams)
  }

  warn(message: any, ...optionalParams: any[]) {
    this.isDev && warn(message, ...optionalParams)
  }
}
