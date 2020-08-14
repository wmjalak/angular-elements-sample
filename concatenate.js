const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/wc-app/runtime.js',
    './dist/wc-app/polyfills.js',
    // './dist/wc-app/scripts.js',
    './dist/wc-app/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/index.js');
  await fs.copyFile('lib_package.json', 'elements/package.json')
  await fs.copyFile('./dist/wc-app/styles.css', 'elements/styles.css')
  // await fs.copy('./dist/wc-app/assets/', 'elements/assets/')
})()
