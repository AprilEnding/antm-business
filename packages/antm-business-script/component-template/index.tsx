import React from 'react'
import { Button } from '@antmjs/vantui'
import './index.less'

export interface ComponentNameProps {
  // ...
}

export function ComponentName(props: ComponentNameProps) {

  return (
    <>
      <Button>new component</Button>
    </>
  )
}

export default ComponentName