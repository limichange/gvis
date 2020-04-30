const { gzipSync } = require('zlib')
const { compress } = require('brotli')

exports.checkAllSizes = function checkAllSizes(targets) {
  if (devOnly) {
    return
  }
  console.log()
  for (const target of targets) {
    checkSize(target)
  }
  console.log()
}

exports.checkSize = function checkSize(target) {
  const pkgDir = path.resolve(`packages/${target}`)
  checkFileSize(`${pkgDir}/dist/${target}.global.prod.js`)
}

exports.checkFileSize = function checkFileSize(filePath) {
  if (!fs.existsSync(filePath)) {
    return
  }
  const file = fs.readFileSync(filePath)
  const minSize = toKb(file.length)
  const gzipped = gzipSync(file)
  const gzippedSize = toKb(gzipped.length)
  const compressed = compress(file)
  const compressedSize = toKb(compressed.length)
  console.log(
    `${chalk.gray(
      chalk.bold(path.basename(filePath))
    )} min:${minSize} / gzip:${gzippedSize} / brotli:${compressedSize}`
  )
}

function toKb(length) {
  return (length / 1024).toFixed(2) + 'kb'
}
