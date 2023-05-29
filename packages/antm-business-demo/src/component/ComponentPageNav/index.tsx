import { navigateBack } from '@tarojs/taro'
import { NavBar } from '@antmjs/vantui'

export default function ComponentPageNav({
  title,
}) {
  return (
    <NavBar
      title={title}
      leftText="返回"
      leftArrow
      safeAreaInsetTop={false}
      onClickLeft={() => navigateBack()}
    />
  )
}