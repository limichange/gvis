import Bus from '@nextvis/bus'

export default abstract class AbstractRender extends Bus {
  abstract name: string
}
