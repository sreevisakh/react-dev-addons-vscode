const childProcess = require('child_process');
const fs = require('fs');
const babel = require('babel-core');

module.exports = function updateFile (sourceCode, ast, filePath){
    let updatedSourceCode = babel.transformFromAst(ast, sourceCode)
    fs.writeFileSync(filePath, updatedSourceCode.code.toString())
}
