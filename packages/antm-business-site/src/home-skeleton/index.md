---
nav: 组件
order: 4
---

# 首页骨架屏

## 使用

```jsx | pure
import { HomeSkeleton } from '@antm-business/ui'
```

## 实例

```jsx | pure
import { HomeSkeleton } from '@antm-business/ui'
import ComponentPageMain from '../../component/ComponentPageMain'
import './index.less'

export default function Index() {

  return (
    <ComponentPageMain>
      <HomeSkeleton loading />
    </ComponentPageMain>
  )
}

```