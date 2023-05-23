import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import del from 'rollup-plugin-delete'
import path from 'path'

const glob = require('glob')

const componentLessFile = glob.sync('src/packages/**/*.less')
const componentTsFile = glob.sync('src/packages/**/*.tsx')
const entrys = {
  'index.es': 'src/index.ts',
}

const copyLessPathMap = componentLessFile.map((item) => {
  const resultPath = item.replace('src/packages/', 'dist/esm/packages/')
  return {
    src: item, 
    dest: resultPath.replace(path.basename(resultPath), '')
  }
})

componentTsFile.forEach((item) => {
  const outputPath = item.replace('src/packages/', 'esm/packages/').replace(path.extname(item), '')
  entrys[outputPath] = item
})

console.log('entrys', entrys);

export default {
  /**
   * todo 动态生成入口
   */
  input: entrys,
  output: [
    {
      format: 'es',
      dir: './dist',
      // name: '[name].js',
      // input entry 拼上entry ; entry-packages/tag-list ; entry-index
      // entryFileNames: '[name].js',
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    typescript(),
    postcss({
      extract: true,
    }),
    copy({
      targets: copyLessPathMap
    })
  ],
}