const path = require('path');
const fs = require('fs');
const APP_ROOT = process.env.PWD;
const dir = fs.readdirSync(path.resolve(APP_ROOT, "pages"));

const clientImports = [];
const serverImports = [];

dir.forEach((file) => {
    const filename = file.split('.')[0];

    clientImports.push(`export const ${filename} = import(/*webpackChunkName: "${filename}" */ "../pages/${file}");`);
    serverImports.push(`export {default as ${filename}} from "../pages/${file}";`);
});

if (!fs.existsSync('tmp')){
    fs.mkdirSync('tmp');
}

fs.writeFileSync(
    "tmp/reactPagesClientModule.js",
    clientImports.join("\n"),
    {"flag": "w"}
);

fs.writeFileSync(
    "tmp/reactPagesServerModule.js",
    serverImports.join("\n"),
    {"flag": "w"}
);