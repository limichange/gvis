// npm run dev -- -t gvis -f cjs

const execa = require('execa')
const chokidar = require('chokidar')
const args = require('minimist')(process.argv.slice(2))
const target = args.target || args.t
const formats = args.formats || args.f
const sourceMap = args.sourcemap || args.s
const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7)

chokidar
  .watch(`packages/${target}/dist/${target}.cjs.js`)
  .on('change', async (event, path) => {
    console.log(event, path)

    try {
      const res = await execa.command(
        `api-extractor run -v -c packages/${target}/api-extractor.json`,
        [],
        {
          preferLocal: true,
        }
      )

      console.log(res.stdout)
    } catch (e) {
      console.log(e)
    }
  })

execa(
  'rollup',
  [
    '-wc',
    '--environment',
    [
      `COMMIT:${commit}`,
      `TARGET:${target}`,
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
