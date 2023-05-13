import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [
    {
      // file: 'lib/bundle.js',
      format: 'es',
      dir: './dist/esm',
    },
    // {
    //   file: 'lib/bundle.min.js',
      
    //   format: 'iife',
    //   plugins: [terser()],
    // },
  ],
  plugins: [typescript()],
}