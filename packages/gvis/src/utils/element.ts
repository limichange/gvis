type attsType = Record<string, any> & {
  parent?: HTMLElement | null
}

export function createHTMLElement(
  tagName: string,
  attrs?: attsType,
  child?: HTMLElement
) {
  const element = document.createElement(tagName)

  Object.assign(element, attrs)

  if (attrs?.parent) {
    attrs.parent.appendChild(element)
  }

  if (child) {
    element.appendChild(child)
  }

  return element
}

export function queryElement() {}
