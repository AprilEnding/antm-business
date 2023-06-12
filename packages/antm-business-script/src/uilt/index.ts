import fse from 'fs-extra'
import {
  pageConfigPath,
  baseDemoConfigPath,
  demoAppConfigTemplatePath,
  baseCompUiImportFilePath,
} from '../constant/index.js'
import nunjucks from 'nunjucks'

export function formatCompName(compName: string) {
  // 大写 转 小写
  return compName.replace(/([A-Z])/g, (match, _, idx) => {
    const low = String.fromCharCode(match.charCodeAt(0) + 32)
    return idx === 0 ? low : `-${low}`
  })
}

export function updateDemoAppConfig() {
  const pageConfigStr = fse.readFileSync(pageConfigPath, { encoding: 'utf-8' })
  const pageConfig = JSON.parse(pageConfigStr)
  const demoAppConfigTempContent = fse.readFileSync(demoAppConfigTemplatePath, { encoding: 'utf-8' })

  const links = pageConfig.pages.map((item) => item.link)
  const result = nunjucks.renderString(
    demoAppConfigTempContent,
    {
      pages: links
    }
  )

  fse.writeFileSync(baseDemoConfigPath, result)
}

export // 更新 ui 导入 index

function updateUiImport() {
  const pageConfigStr = fse.readFileSync(pageConfigPath, { encoding: 'utf-8' })
  const pageConfig = JSON.parse(pageConfigStr)

  let importStr = ''
  let exportStr = ''

  pageConfig.pages.forEach((item, idx, pages) => {
    const { isComponent, componentName } = item
    if (isComponent) {
      importStr += `import {${componentName}} from '@/packages/${formatCompName(componentName)}'\n`
      exportStr += `${componentName}${idx + 1 === pages.length ? '' : ', '}`
    }
  })

  const content = `${importStr}\nexport {${exportStr}}`

  fse.writeFileSync(baseCompUiImportFilePath, content)
}
