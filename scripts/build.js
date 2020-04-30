const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const execa = require('execa')
const allTargets = require('./utils/targets')
const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7)
const devOnly = true
const buildTypes = true
const prodOnly = false
const sourceMap = true

buildAll(allTargets)

async function buildAll(targets) {
  for (const target of targets) {
    console.log('build package: ' + chalk.greenBright(target))
    await build(target)
  }
}

async function build(target) {
  const pkgDir = path.resolve(`packages/${target}`)
  const pkg = require(`${pkgDir}/package.json`)

  console.log(pkg.buildOptions)

  if (!pkg.buildOptions) return

  await fs.remove(`${pkgDir}/dist`)

  const env = devOnly ? 'development' : 'production'
  const formats = pkg.buildOptions.formats

  await execa(
    'rollup',
    [
      '-c',
      '--environment',
      [
        `COMMIT:${commit}`,
        `NODE_ENV:${env}`,
        `TARGET:${target}`,
        formats ? `FORMATS:${formats}` : ``,
        buildTypes ? `TYPES:true` : ``,
        prodOnly ? `PROD_ONLY:true` : ``,
        sourceMap ? `SOURCE_MAP:true` : ``,
      ]
        .filter(Boolean)
        .join(','),
    ],
    { stdio: 'inherit' }
  )

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
}
