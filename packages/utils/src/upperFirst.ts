import { isString } from './type'

export default function upperFirst(string: string) {
  return isString(string)
    ? string.charAt(0).toUpperCase() + string.slice(1)
    : ''
}
