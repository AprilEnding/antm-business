import React from 'react'
import { Skeleton } from '@antmjs/vantui'
import { View } from '@tarojs/components'
// import './index.less'

export interface HomeSkeletonProps {
  loading: boolean
}

const clsPrefix = 'antm-home-skeleton'

export function HomeSkeleton(props: HomeSkeletonProps) {
  const { loading } = props

  return (
    <View className={clsPrefix}>
      <Skeleton row={1} className="swiper-skeleton" loading={loading} />
      <Skeleton row={1} className="card-skeleton" loading={loading} />
    </View>
  )
}

export default HomeSkeleton