import prompts from 'prompts'
import fs from 'fs'
import path from 'path'
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import fse from 'fs-extra'
import nunjucks from 'nunjucks'
import beautify from 'js-beautify'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 这里的dirname是构建之后的目录
const baseCompTemplatePath = path.resolve(__dirname, '../../../component-template')
const baseCompUiPath = path.resolve(__dirname, '../../../../antm-business-ui')
const baseCompUiImportFilePath = path.join(baseCompUiPath, 'src/index.ts')
const baseComUiPackagesPath = path.join(baseCompUiPath, 'src/packages')

const demoTemplatePath = path.resolve(__dirname, '../../../demo-template')
const demoPackagePath = path.resolve(__dirname, '../../../../antm-business-demo')

// page config path
const pageConfigPath = path.join(baseCompUiPath, 'page.config.json')

// demo path
const baseDemoConfigPath = path.resolve(__dirname, '../../../../antm-business-demo/src/app.config.ts')
const demoAppConfigTemplatePath = path.resolve(__dirname, '../../../demo-app-config-template/app.config.njk')

/**
 * 驼峰转横杠
 */
function compNameToPath(ComponentName: string) {
  return ComponentName.replace(/([A-Z])/g, (match, _, idx) => {
    const low = String.fromCharCode(match.charCodeAt(0) + 32)
    return idx === 0 ? low : `-${low}`
  })
}

const questions = [
  {
    type: 'text',
    name: 'ComponentName',
    message: '输入组件名称（英文、大驼峰）',
    validate: (value) => {
      if (/^[A-Z]([a-z]|[A-Z]|[0-9]|\$){0,}/.test(value)) {
        if (fse.existsSync(path.join(baseComUiPackagesPath, compNameToPath(value)))) {
          return false
        }
        return true
      } else {
        return false
      }
    }
  },
  {
    type: 'text',
    name: 'ComponentCNName',
    message: '输入组件名称（中文），否则使用英文',
  },
]

function renderByTemplate(tempPath: string, targetPath: string, value: Object) {
  fse.copySync(tempPath, targetPath)

  const targetFiles = fse.readdirSync(targetPath)

  targetFiles.forEach((item) => {
    const filePath = path.join(targetPath, item)
    const compFileContent = fs.readFileSync(
      filePath,
      { encoding: 'utf-8' }
    )

    const result = nunjucks.renderString(compFileContent, value)

    fse.writeFileSync(filePath, result)
  })
}

/**
 * 更新pageConfig
 */

function updatePageConfig(ComponentCNName, ComponentName, directory) {
  const pageConfigStr = fse.readFileSync(pageConfigPath, { encoding: 'utf-8' })
  const pageConfig = JSON.parse(pageConfigStr)

  pageConfig.pages.push({
    title: ComponentCNName,
    link: `pages/${directory}/index`,
    componentName: ComponentName,
    md: `${directory}/README.md`,
    isComponent: true,
  })

  fse.writeFileSync(
    pageConfigPath,
    beautify(JSON.stringify(pageConfig), { indent_size: 2, space_in_empty_paren: true }),
  )
}

/**
 * 更新demo app.config.ts
 */

function updateDemoAppConfig() {
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

function updateUiImport() {
  const pageConfigStr = fse.readFileSync(pageConfigPath, { encoding: 'utf-8' })
  const pageConfig = JSON.parse(pageConfigStr)

  let importStr = ''
  let exportStr = ''

  pageConfig.pages.forEach((item, idx, pages) => {
    const {isComponent, componentName} = item
    if (isComponent) {
      importStr += `import {${componentName}} from '@/packages/${compNameToPath(componentName)}'\n`
      exportStr += `${componentName}${idx + 1 === pages.length ? '' : ', '}`
    }
  })

  const content = `${importStr}\nexport {${exportStr}}`

  fse.writeFileSync(baseCompUiImportFilePath, content)
}

/**
 * todo 删除组件
 */

function delComponent() {

}

export default async function genraterNewComponent() {
  const response = await prompts(questions)
  let { ComponentName, ComponentCNName } = response || {}
  ComponentCNName = ComponentCNName || ComponentName
  const directory = compNameToPath(ComponentName)
  const compTargetFullPath = path.join(baseComUiPackagesPath, directory)
  const demoTargetFullPath = path.join(demoPackagePath, `src/pages/${directory}`)

  // new comp
  renderByTemplate(
    baseCompTemplatePath,
    compTargetFullPath,
    { ComponentName, ComponentCNName }
  )

  // new demo
  renderByTemplate(
    demoTemplatePath,
    demoTargetFullPath,
    { ComponentName, ComponentCNName }
  )

  // update page config
  updatePageConfig(ComponentCNName, ComponentName, directory)

  // update ui import file
  updateUiImport()

  // update demo app.config.js
  updateDemoAppConfig()
}