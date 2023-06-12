---
nav: 组件
---

# 标签组

## 使用

```jsx | pure
import { TagList } from '@antm-business/ui'
```

## 实例

```jsx | pure
import { View } from '@tarojs/components'
import { TagList } from '@antm-business/ui'
import ComponentPageMain from './../../component/ComponentPageMain'
import { useState } from 'react'
import './index.less'

const initTagList = [
  { key: '1', label: 'tag1', value: '1' },
  { key: '2', label: '标签2add烦烦烦多发点啊打发生的发阿迪斯发到付的手法对付', value: '2' },
  { key: '3', label: 'tag3', value: '3', tagProps: { type: 'warning' } },
  { key: '4', label: 'tag4444444', value: '4', tagProps: { type: 'success' } },
  { key: '5', label: 'tag55555555555', value: '5', tagProps: { type: 'success' } },
]

export default function Index() {

  const [tagList, setTagList] = useState(initTagList as any)
  const onClosed = (key, value) => {
    setTagList(prev => prev.filter(item => item.key !== key))
  }

  return (
    <ComponentPageMain>
      <TagList list={tagList} onClosed={onClosed}></TagList>
    </ComponentPageMain>
  )
}
```