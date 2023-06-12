import prompts from 'prompts'
import fs from 'fs'
import path from 'path'
import fse from 'fs-extra'
import nunjucks from 'nunjucks'
import beautify from 'js-beautify'
import {
  baseCompTemplatePath,
  baseComUiPackagesPath,
  demoTemplatePath,
  demoPackagePath,
  pageConfigPath,
} from '../constant/index.js'
import { formatCompName, updateUiImport, updateDemoAppConfig } from '../uilt/index.js'

const questions = [
  {
    type: 'text',
    name: 'ComponentName',
    message: '输入组件名称（英文、大驼峰）',
    validate: (value) => {
      if (/^[A-Z]([a-z]|[A-Z]|[0-9]|\$){0,}/.test(value)) {
        if (fse.existsSync(path.join(baseComUiPackagesPath, formatCompName(value)))) {
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

export default async function genraterNewComponent() {
  const response = await prompts(questions)
  let { ComponentName, ComponentCNName } = response || {}
  ComponentCNName = ComponentCNName || ComponentName
  const directory = formatCompName(ComponentName)
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