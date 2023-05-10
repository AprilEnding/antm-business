import { View } from '@tarojs/components'
import { HomeSkeleton } from '@antm-business/ui/src/home-skeleton'
import './index.less'

export default function Index() {

  return (
    <View className='index'>
      <HomeSkeleton loading />
    </View>
  )
}
