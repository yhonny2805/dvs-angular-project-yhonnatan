const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/dvs-angular-project-yhonnatan/runtime-es2015.js',
    './dist/dvs-angular-project-yhonnatan/polyfills-es2015.js',
    './dist/dvs-angular-project-yhonnatan/main-es2015.js'

  ];

  await fs.ensureDir('elementos');
  await concat(files, 'elementos/componentes.js');

  await fs.copyFile(

    './dist/dvs-angular-project-yhonnatan/styles.css',
    'elementos/styles.css'
  );

})();
