import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Button } from '@antmjs/vantui'
import './index.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Button type="primary">====</Button>
      <Button type="default">====</Button>
    </View>
  )
}
