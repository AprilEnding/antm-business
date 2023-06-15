import pageConfig from '@antm-business/ui/page.config.json' assert { type: "json" }
import path from 'path'
import fs from 'fs'
import fse from 'fs-extra'
import consola from 'consola'

function getMdImport(componentName) {
  return `import React, { type FC } from 'react';\nconst ${componentName}: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;\nexport default ${componentName};`
}

export default function genraterMd() {
  try {
    let importMdIndexContent = `export { default as Index } from './index';\n`
    const guideUseMdPath = path.resolve('../antm-business-site/docs/guide', 'useGuide.md')
    const componentIndexMdPath = path.resolve('../antm-business-site/src/index', 'index.md')
    let indexMdContent = fs.readFileSync(guideUseMdPath, {
      encoding: 'utf-8',
      flag: 'r',
    })
    let indexMdImport = getMdImport('Index')
    fse.outputFileSync(componentIndexMdPath, indexMdContent)
    fse.outputFileSync(componentIndexMdPath.replace('index.md', 'index.tsx'), indexMdImport)

    pageConfig.pages.forEach((item: any, index: number) => {
      if (!!item.isComponent && !!item.md) {
        const uiMdFilePath = path.resolve('../antm-business-ui/src/packages', item.md)

        const siteMdFilePath = path.resolve('../antm-business-site/src', item.md)
        const siteMdFileIndexPath = siteMdFilePath.replace(path.basename(siteMdFilePath), 'index.md')
  
        let mdContent = fs.readFileSync(uiMdFilePath, {
          encoding: 'utf-8',
          flag: 'r',
        })
  
        mdContent = `---\nnav: 组件\norder: ${index + 2}\n---\n\n${mdContent}`
  
        let mdImportIndex = getMdImport(item.componentName)
        importMdIndexContent += `export { default as ${item.componentName} } from './${item.md.replace('/' + path.basename(item.md), '')}';\n`
        fse.outputFileSync(siteMdFileIndexPath, mdContent)
        fse.outputFileSync(siteMdFileIndexPath.replace('index.md', 'index.tsx'), mdImportIndex)
      }
    })

    fse.outputFileSync(path.resolve('../antm-business-site/src', 'index.ts'), importMdIndexContent)
  } catch (error) {
    consola.error('复制md文件到site错误')
    process.exit(1)
  }
}