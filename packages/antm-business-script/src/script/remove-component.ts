import fse from 'fs-extra'
import { formatCompName, updateUiImport, updateDemoAppConfig } from '../uilt/index.js'
import path from 'path'
import {
  baseCompTemplatePath,
  baseCompUiImportFilePath,
  baseComUiPackagesPath,
  demoTemplatePath,
  demoPackagePath,
  pageConfigPath,
  baseDemoConfigPath,
  demoAppConfigTemplatePath,
} from '../constant/index.js'
import beautify from 'js-beautify'
import consola from 'consola'
import nunjucks from 'nunjucks'

// 删除 ui 组件
function rmUiComponent(compPath) {
  fse.rmSync(compPath, { recursive: true })
}

// 更新 ui page.config.json

function updatePageConfig(ComponentName) {
  const pageConfigStr = fse.readFileSync(pageConfigPath, { encoding: 'utf-8' })
  const pageConfig = JSON.parse(pageConfigStr)

  pageConfig.pages =  pageConfig.pages.filter(item => item.componentName !== ComponentName)

  fse.writeFileSync(
    pageConfigPath,
    beautify(JSON.stringify(pageConfig), { indent_size: 2, space_in_empty_paren: true }),
  )
}



// 删除 demo
function rmDemo(demoPath) {
  try {
    fse.rmSync(demoPath, {recursive: true})
  } catch (error) {
    consola.error('删除demo错误')
  }
}

// 更新 demo app config



export default function removeComponent(compName) {
  const lowCompName = formatCompName(compName)
  const compPath = path.join(baseComUiPackagesPath, lowCompName)
  const demoTargetFullPath = path.join(demoPackagePath, `src/pages/${lowCompName}`)

  if (!fse.existsSync(compPath)) {
    consola.error('不存在该组件')
    return
  }

  rmUiComponent(compPath)

  updatePageConfig(compName)

  updateUiImport()

  rmDemo(demoTargetFullPath)

  updateDemoAppConfig()
}