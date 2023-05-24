const glob = require('glob')
const path = require('path')
const fse = require('fs-extra')

const distLessFiles = glob.sync('dist/esm/packages/**/*.less')
const baseComponentPathSet = {}

console.log('distLessFiles', distLessFiles)

distLessFiles.forEach((lessFile) => {
    const matched = lessFile.match(/dist\/esm\/packages\/[a-zA-Z0-9\-]+/) || []
    matched.forEach(matchedItem => {
      console.log(matchedItem, lessFile)
      const reMatchItem = matchedItem + '/style'
      const relativePath = path.relative(reMatchItem, lessFile).replace(/\\/g, '/')
      console.log('relativePath', relativePath);
      if (!baseComponentPathSet[reMatchItem]) {
        baseComponentPathSet[reMatchItem] = [relativePath]
      } else {
        baseComponentPathSet[reMatchItem].push(relativePath)
      }
    })
})

Object.keys(baseComponentPathSet).forEach((key) => {
  let fileData = ''
  baseComponentPathSet[key].forEach((lessFile) => {
    fileData += `import '${lessFile}';\n`
  })
  
  fse.outputFileSync(key + '/index.ts', fileData)

})

console.log('baseComponentPathSet', baseComponentPathSet)