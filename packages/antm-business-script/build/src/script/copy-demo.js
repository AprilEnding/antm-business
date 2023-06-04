import fs from 'fs';
import path from 'path';
export default function copyDemo() {
    const demoBaseFile = path.resolve(process.cwd(), '../antm-business-demo/dist');
    const sitePublicFile = path.resolve(process.cwd(), 'public');
    const replaceTargetFile = (_, targetPath) => {
        if (targetPath === path.resolve(sitePublicFile, 'index.html')) {
            return path.resolve(sitePublicFile, 'h5.html');
        }
        else {
            return targetPath;
        }
    };
    copy(demoBaseFile, sitePublicFile, { replaceTargetFile: replaceTargetFile });
}
function copy(source, target, option) {
    const result = fs.readdirSync(source, { withFileTypes: true });
    const { replaceTargetFile } = option || {};
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
    }
    if (result?.length) {
        result.forEach((dirObj) => {
            const sourcePath = path.resolve(source, dirObj.name);
            const targetPath = typeof replaceTargetFile === 'function'
                ? replaceTargetFile(sourcePath, path.resolve(target, dirObj.name))
                : path.resolve(target, dirObj.name);
            if (dirObj.isDirectory()) {
                !fs.existsSync(targetPath) && fs.mkdirSync(targetPath);
                copy(sourcePath, targetPath);
            }
            else {
                fs.copyFileSync(sourcePath, targetPath);
            }
        });
    }
}
