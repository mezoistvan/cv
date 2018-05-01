const fs = require('fs-extra');
const concat = require('concat');
const brotli = require('brotli');

(async function build() {

    const files = [
        './dist/cv/runtime.js',
        './dist/cv/polyfills.js',
        './dist/cv/styles.js',
        './dist/cv/main.js',
    ];

    await fs.ensureDir('docs/elements');
    await concat(files, 'docs/elements/my-app.js');
    fs.writeFile('docs/elements/my-app.js.br', brotli.compress(fs.readFileSync('docs/elements/my-app.js')));

})();
