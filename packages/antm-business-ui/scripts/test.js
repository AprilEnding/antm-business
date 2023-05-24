const path = require('path')

// dist/esm/packages/home-skeleton/ dist/esm/packages/tag-list/components/wrapper/index.less
const rpath = path.relative('dist/esm/packages/tag-list', 'dist/esm/packages/tag-list/components/wrapper/index.less')

console.log('rpath', rpath)