type attsType = Record<string, any> & {
  parent?: Element
}

export function createElement(
  tagName: string,
  attrs: attsType,
  child?: Element
) {
  const element = document.createElement(tagName)

  Object.assign(element, attrs)

  if (attrs.parent) {
    attrs.parent.appendChild(element)
  }

  if (child) {
    element.appendChild(child)
  }

  return element
}

export function queryElement() {}
