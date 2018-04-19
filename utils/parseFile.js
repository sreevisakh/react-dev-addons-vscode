const fs = require('fs');
const babylon = require('babylon');

module.exports = function parseFile(filePath, options={
    sourceType: 'module', plugins:["flow",
    "jsx",
    "asyncFunctions",
    "asyncGenerators",
    "classConstructorCall",
    "classProperties",
    "decorators",
    "doExpressions",
    "exponentiationOperator",
    "exportDefaultFrom",
    "exportNamespaceFrom",
    "functionBind",
    "functionSent",
    "objectRestSpread",
    "trailingFunctionCommas",
    "dynamicImport",
    "numericSeparator",
    "optionalChaining",
    "importMeta",
    "classPrivateProperties",
    "bigInt",
    "optionalCatchBinding",
    "throwExpressions",
    "pipelineOperator",
    "nullishCoalescingOperator"] }){
    const sourceCode = fs.readFileSync(filePath, 'utf-8').toString();
    return { ast: babylon.parse(sourceCode, options), code: sourceCode }
}