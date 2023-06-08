import prompts from 'prompts'
import fs from 'fs'
import path from 'path'
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import fse from 'fs-extra'
import nunjucks from 'nunjucks'
import pageConfig from 'config/page.config.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 这里的dirname是构建之后的目录
const baseCompTemplatePath = path.resolve(__dirname, '../../../component-template')
const baseCompUiPath = path.resolve(__dirname, '../../../../antm-business-ui')

const demoTemplatePath = path.resolve(__dirname, '../../../demo-template')
const demoPackagePath = path.resolve(__dirname, '../../../../antm-business-demo')

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
        if (fse.existsSync(path.join(baseCompUiPath, compNameToPath(value)))) {
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
 * todo
 * 配置文件不能放在script
 * 移动至ui包
 */

function updatePageConfig(ComponentCNName, ComponentName, directory) {
  pageConfig.pages.push({
    title: ComponentCNName,
    link: `pages/${directory}/index`,
    componentName: ComponentName,
    md: `${directory}/README.md`,
    isComponent: true,
  })
  // fse.writeFileSync(
  //   path.resolve(__dirname, '../../../config/')
  // )
}

export default async function genraterNewComponent() {
  const response = await prompts(questions)
  let { ComponentName, ComponentCNName } = response || {}
  ComponentCNName = ComponentCNName || ComponentName
  const directory = compNameToPath(ComponentName)
  const compTargetFullPath = path.join(baseCompUiPath, directory)
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

}