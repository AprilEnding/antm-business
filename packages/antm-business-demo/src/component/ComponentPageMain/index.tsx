import { useEffect, useState } from 'react'
import { getCurrentInstance } from '@tarojs/taro'
import { View } from '@tarojs/components'
import ComponentPageNav from '../ComponentPageNav'
import pageConfig from '@antm-business/ui/dist/page.config.json'
import './index.less'


export default function ComponentPageMain({ children }) {

  const [pageTitle, setPageTitle] = useState<string | undefined>('')

  useEffect(() => {
    const { router } = getCurrentInstance()
    const { path } = router || {}
    const pageTitle = pageConfig.pages.find((item) => path?.includes(item.link))?.title
    setPageTitle(pageTitle)
  })

  return (
    <View className="component-page-main">
      <ComponentPageNav title={pageTitle} />
      <View className="component-page-main-content">
        {children}
      </View>
    </View>
  )
}