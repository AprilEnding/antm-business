const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')

const typeIndexFile = path.resolve(process.cwd(), 'dist/types/src/index.d.ts')

let data = fs.readFileSync(typeIndexFile, {
  encoding: 'utf8',
  flag: 'r',
})

data = data.replace(/@\/packages/g, './packages')

fse.outputFileSync(typeIndexFile, data)