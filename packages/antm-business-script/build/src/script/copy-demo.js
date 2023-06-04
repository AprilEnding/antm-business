import glob from 'glob';
import fs from 'fs';
import path from 'path';
export default function copyDemo() {
    const demoFiles = glob.sync('../antm-business-demo/dist/**/*.*');
    console.log('dmeo files', demoFiles);
    if (demoFiles?.length) {
        demoFiles.forEach((item) => {
            let sitePublicPath = item.replace('../antm-business-demo/dist/', 'public/');
            sitePublicPath = sitePublicPath.replace(/index\.html/, 'h5.html');
            fs.copyFileSync(path.resolve(process.cwd(), item), path.resolve(process.cwd(), sitePublicPath));
        });
    }
    else {
    }
}
