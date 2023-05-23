import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import del from 'rollup-plugin-delete'

export default {
  input: {
    index: 'src/index.less'
  },
  output: [
    {
      format: 'umd',
      dir: './dist',
      // name: '[name].less'
    }
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    typescript(),
    postcss({
      extract: true,
    })
  ],
}