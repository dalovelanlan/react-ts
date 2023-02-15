const fs = require('fs')
const { page, less, toPascalCaseFn: toPascalCase } = require('./page_templates')



// 先输入地址后输入文件名
const [path, name] = process.argv.slice(2);
console.log("You Path :" ,path)
console.log("You name :" ,name)
if (!name) throw new Error('You must include a page name.');
if (!path) throw new Error('You must include a page path.');

const pathArray = path.split('/')


let pathDir = './src/pages/'


pathArray.forEach(value => {
    pathDir += `${toPascalCase(value.toString())}/`
})

// throw an error if the file already exists
if (fs.existsSync(pathDir)) throw new Error('A Page Path with that name already exists.');

// create the folder
fs.mkdirSync(pathDir, { recursive: true });

function writeFileErrorHandler(err) {
    if (err) throw err;
}

// component.tsx
// fs.writeFile(`${pathDir}/${name}.tsx`, component(name), writeFileErrorHandler);
// component.less
fs.writeFile(`${pathDir}/${name}.less`, '', writeFileErrorHandler);
// storybook.jsx
// fs.writeFile(`${pathDir}/${name}.stories.jsx`, story(name), writeFileErrorHandler);
// test.tsx
// fs.writeFile(`${pathDir}/${name}.test.tsx`, test(name), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${pathDir}/index.tsx`, page(toPascalCase(name)), writeFileErrorHandler);

// test


