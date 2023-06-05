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

## todo
根据pageconfig 生成 app.config.ts