import { View } from '@tarojs/components'
import React, { useState } from 'react'
import { Tag } from '@antmjs/vantui'

const clsPrefix = 'antm-tag-list'

export interface TagListProps {

}

export function TagList(props: TagListProps) {

  const { } = props

  return (
    <View className={clsPrefix}>
      <Tag
        type="primary"
        size="medium"
        closeable
        onClose={() => {}}
      >
        标签
      </Tag>
    </View>
  )
}

export default TagList