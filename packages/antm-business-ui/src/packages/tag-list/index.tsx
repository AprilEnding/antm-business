import React from 'react'
import { View } from '@tarojs/components'
import { useCallback } from 'react'
import { Tag } from '@antmjs/vantui'
import type { TagProps } from '@antmjs/vantui/types/tag'
import { Wrapper } from './components/wrapper'
import './index.less'

export type ListItem = { key: string, label: string, value: string, tagProps?: TagProps }
export type List = ListItem[]

export interface TagListProps {
  list: List
  onClosed: (key: string, value: ListItem) => void
}

export function TagList(props: TagListProps) {

  const { list, onClosed } = props

  const handleTagClosed = useCallback((key: string, value: ListItem) => {
    if (typeof onClosed === 'function') {
      onClosed(key, value)
    }
  }, [onClosed])

  return (
    <Wrapper>
      {!!list?.length && list.map(item => {
        const { tagProps, key, label, value } = item
        return (
          <Tag
            type="primary"
            size="medium"
            closeable
            {...tagProps}
            key={key}
            onClose={() => handleTagClosed(key, item)}
          >
            <View className="van-ellipsis">{label}</View>
          </Tag>
        )
      })}
    </Wrapper>
  )
}

export default TagList