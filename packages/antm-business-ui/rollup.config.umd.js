import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import path from 'path'

export default {
  input: {
    'index.umd': 'src/index.ts'
  },
  output: [
    {
      format: 'umd',
      dir: './dist',
      name: 'antmBusinessUi'
    },
  ],
  plugins: [
    typescript(),
    postcss({
      extract: path.resolve('dist/index.css'),
    }),
  ],
}