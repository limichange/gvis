function toString(any: any): string {
  return Object.prototype.toString.apply(any).slice(8, -1)
}

function equal(any: any, type: string) {
  return toString(any) === type
}

export const isObject = (any: any) => equal(any, 'Object')
export const isArray = (any: any) => equal(any, 'Array')
export const isPromise = (any: any) => equal(any, 'Promise')
export const isSymbol = (any: any) => equal(any, 'Symbol')
export const isNumber = (any: any) => equal(any, 'Number')
export const isString = (any: any) => equal(any, 'String')
