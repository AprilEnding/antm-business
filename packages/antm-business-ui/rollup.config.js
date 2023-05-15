import typescript from '@rollup/plugin-typescript'
// import less from 'rollup-plugin-less'
import postcss from 'rollup-plugin-postcss'
import del from 'rollup-plugin-delete'

export default {
  /**
   * todo 动态生成入口
   */
  input: {
    'index.es': 'src/index.ts',
    'esm/packages/home-skeleton/index': 'src/packages/home-skeleton/index.tsx',
    'esm/packages/tag-list/index': 'src/packages/tag-list/index.tsx',
    'esm/packages/tag-list/components/wrapper/index': 'src/packages/tag-list/components/wrapper/index.tsx',
  },
  output: [
    {
      format: 'es',
      dir: './dist',
      name: '[name].js',
      // input entry 拼上entry ; entry-packages/tag-list ; entry-index
      // entryFileNames: '[name].js',
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    typescript(),
    postcss({
      extract: true,
    })
  ],
}