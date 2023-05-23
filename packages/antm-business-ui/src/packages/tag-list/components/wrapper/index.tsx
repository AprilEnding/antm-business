import React from 'react'
import { View } from '@tarojs/components'

const clsPrefix = 'antm-tag-list'

export interface WrapperProps {
  children: React.ReactNode
}

export function Wrapper(props: WrapperProps) {
  return (
    <View className={clsPrefix}>
      {props.children}
    </View>
  )
}

export default Wrapper