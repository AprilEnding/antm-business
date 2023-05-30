import { copyFile } from 'node:fs/promises'
import path from 'path'
import pageConfig from '../../config/page.config.js'


export default function genraterMd() {
  console.log('====>>>>');
  pageConfig.pages.forEach(item => {
    console.log('===', path.resolve('../antm-business-ui/src/packages', item.md));
    console.log('---', path.resolve('../antm-business-ui/src/packages', item.md));
  })
}