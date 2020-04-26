import Bus from '@nextvis/bus'

export default abstract class AbstractElement extends Bus {
  abstract type: string
}
