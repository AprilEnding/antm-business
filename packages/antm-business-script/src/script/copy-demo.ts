import fs from 'fs'
import path from 'path'
import consola from 'consola'


export default function copyDemo() {
  try {
    const demoBaseFile = path.resolve(process.cwd(), '../antm-business-demo/dist')
    const sitePublicFile = path.resolve(process.cwd(), 'public')
    const replaceTargetFile = (_: string, targetPath: string) => {
      if (targetPath === path.resolve(sitePublicFile, 'index.html')) {
        return path.resolve(sitePublicFile, 'h5.html')
      } else {
        return targetPath
      }
    }
    copy(demoBaseFile, sitePublicFile, { replaceTargetFile: replaceTargetFile })
  } catch (error) {
    consola.error('处理demo错误')
    process.exit(1)
  }

}

function copy(
  source: string,
  target: string,
  option?: {
    replaceTargetFile: (sourcePath: string, targetPath: string) => string
  }
) {
  const result = fs.readdirSync(source, { withFileTypes: true })
  const { replaceTargetFile } = option || {}

  if (!fs.existsSync(target)) {
    fs.mkdirSync(target)
  }

  if (result?.length) {
    result.forEach((dirObj) => {
      const sourcePath = path.resolve(source, dirObj.name)
      const targetPath = typeof replaceTargetFile === 'function'
        ? replaceTargetFile(sourcePath, path.resolve(target, dirObj.name))
        : path.resolve(target, dirObj.name)

      if (dirObj.isDirectory()) {
        !fs.existsSync(targetPath) && fs.mkdirSync(targetPath)
        copy(sourcePath, targetPath)
      } else {
        fs.copyFileSync(sourcePath, targetPath)
      }
    })
  }
}