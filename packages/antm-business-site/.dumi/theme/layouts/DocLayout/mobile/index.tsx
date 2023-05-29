import React, { useMemo } from 'react'
import './index.less'
import { useLocation } from 'dumi'

const test = [
  {
    sitePath: '/components/test',
    demoPath: '/pages/tag-list/index'
  },
  {
    sitePath: '/components/foo',
    demoPath: '/pages/home-skeleton/index'
  },
]

export default function MobileIframe() {

  const location = useLocation()

  console.log('location', location);

  const iframePath = useMemo(() => {
    const sitePathName = location?.pathname || ''
    const matched = test.find((item) => sitePathName.includes(item.sitePath))
    if (matched?.demoPath) {
      return `/h5.html/#${matched?.demoPath}`
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