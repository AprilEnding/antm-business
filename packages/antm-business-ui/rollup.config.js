import typescript from '@rollup/plugin-typescript'
import less from 'rollup-plugin-less'

export default {
  input: {
    index: 'src/index.ts',
    'packages/home-skeleton': 'src/packages/home-skeleton/index.tsx',
    // 'packages/home-skeleton/': 'src/packages/home-skeleton/index.less.ts',
    'packages/tag-list': 'src/packages/tag-list/index.tsx',
  },
  output: [
    {
      format: 'es',
      dir: './dist/esm',
      // input entry 拼上entry ; entry-packages/tag-list ; entry-index
      // entryFileNames: 'entry-[name].js',
    }
  ],
  plugins: [
    typescript(),
    less({
      output: true
    }),
  ],
}