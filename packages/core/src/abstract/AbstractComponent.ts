import Bus from '@nextvis/bus'

export default abstract class AbstractComponent extends Bus {
  abstract name: string
}
