const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        // importante main al ultimo
        './dist/elementsApp1/polyfills.js',
        './dist/elementsApp1/runtime.js',
        './dist/elementsApp1/scripts.js',
        './dist/elementsApp1/main.js',
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/list-products.js')
    console.info('Elements created successfully!')

})()
