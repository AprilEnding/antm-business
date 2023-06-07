import prompts from 'prompts'
import fs from 'fs'
import path from 'path'
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseCompTemplatePath = path.resolve(__dirname, '../../../component-template')

const questions = [
  {
    type: 'text',
    name: 'ComponentName',
    message: '输入组件名称（英文、大驼峰）',
    validate: (value) => /^[A-Z]([a-z]|[A-Z]|[0-9]|\$){0,}/.test(value)
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
  console.log('ComponentName', ComponentName);
  console.log('ComponentCNName', ComponentCNName);

  /**
   * 判断组件是否已经存在
   */


  /**
   * 驼峰转横杠
   */
  const directory = ComponentName.replace(/([A-Z])/g, (match, $1, idx) => {
    const low = String.fromCharCode(match.charCodeAt(0) + 32)
    return idx === 0 ? low : `-${low}`
  })


  /**
   * 先把模板复制过去
   * 如何再替换
   */

  const compFileContent = fs.readFileSync(
    path.join(baseCompTemplatePath, 'index.tsx'),
    { encoding: 'utf-8' }
  )

  const newCompFileContent = compFileContent.replace(/(ComponentName)/g, () => ComponentName)




  console.log('directory', directory);
  console.log('compFileContent', compFileContent);

}