import path from 'path'
import ts from 'rollup-plugin-typescript2'
import typescript from 'typescript'
import json from '@rollup/plugin-json'
import { resolve, pkg } from './pathUtils'

const packageOptions = pkg.buildOptions || {}

export function createConfig(format, output) {
  if (!output) {
    console.log(require('chalk').yellow(`invalid format: "${format}"`))
    process.exit(1)
  }

  const isGlobalBuild = /global/.test(format)

  if (isGlobalBuild) {
    output.name = packageOptions.name
  }

  const tsPlugin = ts({
    typescript,
    check: true,
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
    tsconfigOverride: {
      compilerOptions: {
        sourceMap: true,
        declaration: true,
        declarationMap: true,
      },
      exclude: ['**/__tests__'],
    },
  })

  return {
    input: resolve(`src/index.ts`),
    plugins: [
      json({
        namedExports: false,
      }),
      tsPlugin,
    ],
    output,
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    },
  }
}
