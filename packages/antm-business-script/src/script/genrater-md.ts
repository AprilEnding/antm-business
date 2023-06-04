import pageConfig from '../../config/page.config.js'
import path from 'path'
import fs from 'fs'
import fse from 'fs-extra'
import consola from 'consola'



export default function genraterMd() {
  try {
    let importMdIndexContent = ''
    pageConfig.pages.forEach(item => {
      const uiMdFilePath = path.resolve('../antm-business-ui/src/packages', item.md)

      const siteMdFilePath = path.resolve('../antm-business-site/src', item.md)
      const siteMdFileIndexPath = siteMdFilePath.replace(path.basename(siteMdFilePath), 'index.md')

      let mdContent = fs.readFileSync(uiMdFilePath, {
        encoding: 'utf-8',
        flag: 'r',
      })

      mdContent = `---\nnav: 组件\n---\n\n${mdContent}`

      let mdImportIndex = `import React, { type FC } from 'react';\nconst ${item.componentName}: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;\nexport default ${item.componentName};`
      importMdIndexContent += `export { default as ${item.componentName} } from './${item.md.replace('/' + path.basename(item.md), '')}';\n`
      fse.outputFileSync(siteMdFileIndexPath, mdContent)
      fse.outputFileSync(siteMdFileIndexPath.replace('index.md', 'index.tsx'), mdImportIndex)
    })

    fse.outputFileSync(path.resolve('../antm-business-site/src', 'index.ts'), importMdIndexContent)
  } catch (error) {
    consola.error('genrater md file error')
    process.exit(1)
  }

}