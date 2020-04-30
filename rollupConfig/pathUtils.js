import path from 'path'

export const packagesDir = path.resolve(__dirname, 'packages')
export const packageDir = path.resolve(packagesDir, process.env.TARGET)
export const name = path.basename(packageDir)
export const resolve = (p) => path.resolve(packageDir, p)
export const pkg = require(resolve(`package.json`))
