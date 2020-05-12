import AbstractBase from './AbstractBase'
import { Cursor } from '@nextvis/types'

export default abstract class AbstractElement extends AbstractBase {
  abstract render(ctx: CanvasRenderingContext2D): void
  abstract clone(): any

  cursor: Cursor = 'default'
}
