import path from 'path'
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 这里的dirname是构建之后的目录
export const baseCompTemplatePath = path.resolve(__dirname, '../../component-template')
export const baseCompUiPath = path.resolve(__dirname, '../../../antm-business-ui')
export const baseCompUiImportFilePath = path.join(baseCompUiPath, 'src/index.ts')
export const baseComUiPackagesPath = path.join(baseCompUiPath, 'src/packages')

export const demoTemplatePath = path.resolve(__dirname, '../../demo-template')
export const demoPackagePath = path.resolve(__dirname, '../../../antm-business-demo')

// page config path
export const pageConfigPath = path.join(baseCompUiPath, 'page.config.json')

// demo path
export const baseDemoConfigPath = path.resolve(__dirname, '../../../antm-business-demo/src/app.config.ts')
export const demoAppConfigTemplatePath = path.resolve(__dirname, '../../demo-app-config-template/app.config.njk')
