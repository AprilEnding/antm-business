import React, { useMemo } from 'react'
import './index.less'
import { useLocation } from 'dumi'
import pageConfig from '@antm-business/script/build/config/page.config.js'

export default function MobileIframe() {

  const location = useLocation()

  const iframePath = useMemo(() => {
    const sitePathName = location?.pathname || ''
    const matched = pageConfig?.pages?.find((item: any) => sitePathName.includes(item.sitePath))
    if (matched?.link) {
      return `/h5.html/#/${matched?.link}`
    } else {
      return '/h5.html/#/pages/index/index'
    }
  }, [location?.pathname])

  return (
    <div className="mobile-iframe-wrapper">
      <iframe src={iframePath}></iframe>
    </div>
  )
}