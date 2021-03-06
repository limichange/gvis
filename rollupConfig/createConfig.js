import path from 'path'
import ts from 'rollup-plugin-typescript2'
import { createReplacePlugin } from './createReplacePlugin'
import typescript from 'typescript'
import json from '@rollup/plugin-json'
import { resolve, pkg, dirname } from './pathUtils'

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
    tsconfig: path.resolve(dirname, 'tsconfig.json'),
    cacheRoot: path.resolve(dirname, 'node_modules/.rts2_cache'),
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
    external: Object.keys(pkg.dependencies || {}),
    plugins: [
      json({
        namedExports: false,
      }),
      tsPlugin,
      createReplacePlugin(),
    ],
    output,
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    },
  }
}
