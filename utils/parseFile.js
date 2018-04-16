const fs = require('fs');
const babylon = require('babylon');

module.exports = function parseFile(filePath, options={
    sourceType: 'module', plugins:['jsx', 'decorators', 'classProperties', 'objectRestSpread'] }){
    const sourceCode = fs.readFileSync(filePath, 'utf-8').toString();
    return { ast: babylon.parse(sourceCode, options), code: sourceCode }
}