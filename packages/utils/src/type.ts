function toString(any: any): string {
  return Object.prototype.toString.apply(any).slice(8, -1)
}

function check(val: unknown, type: string) {
  return toString(val) === type
}

export function isObject(val: unknown): val is Record<any, any> {
  return check(val, 'Object')
}

export function isArray<T = any>(val: unknown): val is Array<T> {
  return check(val, 'Array')
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return check(val, 'Promise')
}

export function isSymbol(val: unknown): val is Symbol {
  return check(val, 'Symbol')
}

export function isNumber(val: unknown): val is number {
  return check(val, 'Number')
}

export function isString(val: unknown): val is string {
  return check(val, 'String')
}

export function isFunction(val: unknown): val is Function {
  return check(val, 'Function')
}

export function isInteger(val: unknown): val is number {
  return Number.isInteger
    ? Number.isInteger(val as number)
    : isNumber(val) && val % 1 === 0
}

export function isNull(val: unknown): val is null {
  return check(val, 'Null')
}

export function isUndefined(val?: unknown): val is undefined {
  return check(val, 'Undefined')
}

export function isPrototype(val: any) {
  const Ctor = val && val.constructor
  const proto = (isFunction(Ctor) && Ctor.prototype) || Object.prototype
  return val === proto
}
