import Bus from '@nextvis/bus'

export default abstract class AbstractRender extends Bus {
  abstract type: string
}
