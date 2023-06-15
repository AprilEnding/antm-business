import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/antm-business/',
  publicPath: '/antm-business/',
  themeConfig: {
    name: 'antm-business',
    logo: false,
    footer: '@antm-business'
  },
});
