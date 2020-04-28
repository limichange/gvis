import { Logger } from '@nextvis/utils'

const logger: Logger = new Logger({
  isDev: __DEV__,
})

export default logger
