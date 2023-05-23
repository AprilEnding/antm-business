import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import del from 'rollup-plugin-delete'
import path from 'path'
import glob from 'glob'

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

/**
 * todo
 * types import @/packages 问题
 */

export default {
  input: entrys,
  output: [
    {
      format: 'es',
      dir: './dist',
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    typescript(),
    postcss({
      extract: path.resolve('dist/index.css'),
    }),
    copy({
      targets: copyLessPathMap
    })
  ],
}