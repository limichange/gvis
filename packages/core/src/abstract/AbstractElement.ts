import AbstractBase from './AbstractBase'

export default abstract class AbstractElement extends AbstractBase {
  abstract render(ctx: CanvasRenderingContext2D): void
}
