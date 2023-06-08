import prompts from 'prompts'
import fs from 'fs'
import path from 'path'
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import fse from 'fs-extra'
import nunjucks from 'nunjucks'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseCompTemplatePath = path.resolve(__dirname, '../../../component-template')
const baseCompUiPath = path.resolve(__dirname, '../../../../antm-business-ui')

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

export default async function genraterNewComponent() {
  const response = await prompts(questions)
  let { ComponentName, ComponentCNName } = response || {}
  ComponentCNName = ComponentCNName || ComponentName
  const directory = compNameToPath(ComponentName)
  const compTargetFullPath = path.join(baseCompUiPath, directory)

  /**
   * 先把模板复制过去
   * 如何再替换
   */

  fse.copySync(baseCompTemplatePath, compTargetFullPath)

  const targetFiles = fse.readdirSync(compTargetFullPath)

  targetFiles.forEach((item) => {
    const filePath = path.join(compTargetFullPath, item)
    const compFileContent = fs.readFileSync(
      filePath,
      { encoding: 'utf-8' }
    )
    
    const result = nunjucks.renderString(compFileContent, {
      ComponentName, 
      ComponentCNName,
    })

    fse.writeFileSync(filePath, result)
  })
}