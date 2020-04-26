import { isArray } from './type'

interface eachFunction<T> {
  (item: T, index: number): unknown
}

export default function each<T>(
  elements: Array<T> | null | undefined,
  func: eachFunction<T>
) {
  if (!isArray(elements)) {
    return
  }

  let result

  for (
    let i = 0, len = (elements as T[]).length;
    i < len;
    i++
  ) {
    result = func((elements as T[])[i], i)
    if (result === false) {
      break
    }
  }
}
