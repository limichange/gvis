import replace from '@rollup/plugin-replace'

export function createReplacePlugin() {
  const replacements = {
    __DEV__: true,
  }

  return replace(replacements)
}
