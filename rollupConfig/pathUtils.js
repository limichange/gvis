import path from 'path'

let _dirname = __dirname
if (__dirname.includes('/packages')) {
  _dirname = _dirname.split('/packages')[0]
}

console.log(_dirname)

export const dirname = _dirname
export const packagesDir = path.resolve(_dirname, 'packages')
export const packageDir = path.resolve(packagesDir, process.env.TARGET)
export const name = path.basename(packageDir)
export const resolve = (p) => path.resolve(packageDir, p)
export const pkg = require(resolve(`package.json`))
