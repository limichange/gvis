import { isObject } from './type'

interface eachFunction {
  (item: any, key: any): unknown
}

export default function each(
  object: any,
  func: eachFunction
): void {
  if (!isObject(object)) {
    return
  }

  let result

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      result = func(object[key], key)
      if (result === false) {
        break
      }
    }
  }
}
