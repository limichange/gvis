// npm run dev -- -t gvis -f cjs

const execa = require('execa')
const chokidar = require('chokidar')
const lodash = require('lodash')
const chalk = require('chalk')
const allTargets = require('./utils/targets')
const args = require('minimist')(process.argv.slice(2))
const target = args.target || args.t
const formats = args.formats || args.f
const sourceMap = args.sourcemap || args.s
const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7)

chokidar.watch(`dist/${target}.esm.js`).on(
  'change',
  lodash.debounce(async (event, path) => {
    console.log(event, path)

    try {
      await execa.command(`api-extractor run -v -c api-extractor.json`, [], {
        preferLocal: true,
      })

      console.log(chalk.green(`${target}.d.ts ## ok ##`))
    } catch (e) {
      console.log(e)
    }
  }, 10000)
)

allTargets.forEach((t) => {
  execa(
    'rollup',
    [
      '-wc',
      '--environment',
      [
        `COMMIT:${commit}`,
        `TARGET:${t}`,
        `FORMATS:${formats || 'global'}`,
        sourceMap ? `SOURCE_MAP:true` : ``,
      ]
        .filter(Boolean)
        .join(','),
    ],
    {
      stdio: 'inherit',
    }
  )
})
