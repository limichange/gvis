import { isObject } from './type'

interface eachFunction {
  (item: any, index: string): unknown
}

export default function each(
  elements: object | null | undefined,
  func: eachFunction
): void {
  if (!isObject(elements)) {
    return
  }

  let result

  for (let k in elements) {
    if (elements.hasOwnProperty(k)) {
      // @ts-ignore
      result = func(elements[k], k)
      if (result === false) {
        break
      }
    }
  }
}
