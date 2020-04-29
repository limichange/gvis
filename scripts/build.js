// const args = require('minimist')(process.argv.slice(2))
// const targets = args._
// const formats = args.formats || args.f
// const devOnly = args.devOnly || args.d

// import fs from 'fs'
// import { targets as allTargets } from './utils.js'

const allTargets = require('./utils').targets

console.log(allTargets)
