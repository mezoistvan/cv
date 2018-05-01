const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/cv/runtime.js',
        './dist/cv/polyfills.js',
        './dist/cv/styles.js',
        './dist/cv/main.js',
    ];

    await fs.ensureDir('docs/elements');
    await concat(files, 'docs/elements/my-app.js');

})();
