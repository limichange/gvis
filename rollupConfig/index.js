import { createConfig } from './createConfig'
import { name, pkg, resolve } from './pathUtils'

if (!process.env.TARGET) {
  throw new Error('TARGET package must be specified via --environment flag.')
}

const packageOptions = pkg.buildOptions || {}

const outputConfigs = {
  esm: {
    file: resolve(`dist/${name}.esm.js`),
    format: `es`,
  },
  cjs: {
    file: resolve(`dist/${name}.cjs.js`),
    format: `cjs`,
  },
  global: {
    file: resolve(`dist/${name}.global.js`),
    format: `iife`,
  },
}

const inlineFormats = process.env.FORMATS && process.env.FORMATS.split(',')
const packageFormats = inlineFormats || packageOptions.formats
const packageConfigs = packageFormats.map((format) => {
  return createConfig(format, outputConfigs[format])
})

export default packageConfigs
