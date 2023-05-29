import { View } from '@tarojs/components'
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
