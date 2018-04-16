const fs = require('fs');
const generate = require('@babel/generator').default;
const babel = require('babel-core');

module.exports = function updateFile (sourceCode, ast, filePath){
    let updatedSourceCode = babel.transformFromAst(ast, sourceCode);
    console.log(updatedSourceCode);
    fs.writeFileSync(filePath, updatedSourceCode.code.toString())
}
