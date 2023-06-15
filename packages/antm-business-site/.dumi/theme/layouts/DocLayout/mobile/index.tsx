import React, { useMemo } from 'react'
import './index.less'
import { useLocation } from 'dumi'
import pageConfig from '@antm-business/ui/page.config.json'

export default function MobileIframe() {

  const location = useLocation()

  const iframePath = useMemo(() => {
    const sitePathName = (location?.pathname || '')?.replace('/components/', '')
    const matched = pageConfig?.pages?.find((item: any) => item?.link?.includes(sitePathName))
    console.log('sitePathName', sitePathName)
    console.log('pageConfig?.pages?', pageConfig?.pages)
    if (matched?.link) {
      return `/antm-business/h5.html#/${matched?.link}`
    } else {
      return '/antm-business/h5.html#/pages/index/index'
    }
  }, [location?.pathname])

  return (
    <div className="mobile-iframe-wrapper">
      <iframe src={iframePath}></iframe>
    </div>
  )
}