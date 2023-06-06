import { View, Text } from '@tarojs/components'
import { useLoad, navigateTo } from '@tarojs/taro'
import { Icon } from '@antmjs/vantui'
import pageConfig from '@antm-business/script/build/config/page.config.js'
import './index.less'

function CompListItem({
  title,
  link,
}) {

  const toLink = () => {
    navigateTo({
      url: link
    })
  }

  return (
    <View className='comp-list-item' onClick={toLink}>
      <View>{title}</View>
      <View>
        <Icon name="arrow" color='#999' />
      </View>
    </View>
  )
}

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <View className='info'>
        <View className='title'>@antm-business/ui</View>
        <View className='content'>基于@antmjs/vantui开发的业务组件库</View>
      </View>

      <View className='comp-list'>
        {
          pageConfig.pages.filter(item => item.isComponent).map((item) => (
            <CompListItem title={item.title} link={item.link} />
          ))
        }
      </View>
    </View>
  )
}
