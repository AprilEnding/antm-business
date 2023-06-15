# 使用指南

[文档地址](https://aprilending.github.io/antm-business/)

## 介绍
antm-business是一款基于taro和antmjs构建的业务组件库

## 使用antmjs和antm-business

1. 安装

```bash
# 通过 npm 安装
npm install @antmjs/vantui
npm install @antm-business/ui

# 通过 yarn 安装
yarn add @antmjs/vantui
yarn add @antm-business/ui
```

2. 默认node_modules内的模块不会被编译，需要配置

```js
const config = {
  h5: {
    esnextModules: ["@antmjs", "@antm-business"],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      pxtransform: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}
```

## 配置按需加载

1. 下载插件

```bash
npm i babel-plugin-import -D
```

2. 配置
```js
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "@antmjs/vantui",
        "libraryDirectory": "es",
        "style": (name) => `${name}/style/less`,
      },
      "@antmjs/vantui"
    ],
    [
      "import",
      {
        "libraryName": "@antm-business/ui",
        "libraryDirectory": "dist/esm/packages",
        "style": (name) => `${name}/style`,
      },
      "@antm-business/ui"
    ]
  ]
}

```