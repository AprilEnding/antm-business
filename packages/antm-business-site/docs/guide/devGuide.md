---
nav: 指南
order: 2
---

# 开发指南

## 基本介绍

1. 使用lerna管理包
2. 包的目录结构
```text
package
  --antm-business-demo 基于taro的demo包
  --antm-business-script 一些打包脚本和demo/site使用的配置
  --antm-business-site 基于dumi的文档网站
  --antm-business-ui ui组件
```
3. 组件使用rollup打包

## 新建组件

### 执行新建组件命令

```shell
# cd antm-business-ui
yarn create:comp
```

### 目录结构
```text
antm-business-ui
  --src
    --packages
      --component-demo
        --other(可以添加其他文件或者文件夹)
        index.less
        index.tsx(必须)
        README.md(必须)
```

示例：index.tsx

```jsx | pure
import React from 'react'
import './index.less'

export interface CompDemoProps {
  ...
}

export function CompDemo(props: TagListProps) {
  return (
    <>
      ...
    </>
  )
}

export default CompDemo
```

## 删除组件
```shell
# cd antm-business-ui
yarn remove:comp ComponentName
```
## 新建/删除组件需要注意
```text

你不应该通过手动新建或者删除组件文件的形式去新建和删除组件，因为新建组件指令会额外处理其他配置，额删除指令会清楚这些配置。
```

## 打包

### 执行打包命令

```bash
# 在antm-business-ui目录下
yarn build
```

### 打包目录结构

```text
antm-business-ui
  --dist
    --esm 实现按需加载
      --packages
        --comp-demo
          --style
            index.ts 按需加载引入less文件使用
          index.js
          index.less
    --types
      --src
        --packages
          --comp-demo
            index.d.ts
        index.d.ts
    index.css
    index.es.js
    index.umd.js
```

## 本地开发

1. 构建 antm-business-ui

```shell
# cd antm-business-ui
yarn build
```

2. 启动taro demo

```shell
# cd antm-business-ui
# 小程序端未测试
yarn dev:h5
```

3. 注意

```text
1. 修改组件之后需要重新执行yarn build（todo：监听文件内容，自动执行yarn build）。
2. demo内的对应组件的页面会再使用指令新建组件时新建
```

## 本地开发文档

```shell
# cd antm-business-site 
yarn start
```

注意：
1. 组件markdown会从antm-business-ui对应的组件README.md同步
2. 关于侧边的h5预览，页面来自与demo h5 的构建内容（执行yarn start 时 会执行 demo 的 build:h5）

## 发布

发包前提交本地修改

```shell
# cd antm-business
yarn bps
```

## 部署GitHub Pages

### 手动部署

```shell
# cd antm-business
yarn deploy
```