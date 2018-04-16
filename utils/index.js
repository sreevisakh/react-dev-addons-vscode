const updateFile = require('./updateFile');
const insertPropType = require('./insertPropType');
const parseAST = require('./parseAST');
const parseFile = require('./parseFile');

exports.addToPropTypes = function(filePath, key, type){
    let { ast, code } = parseFile(filePath)
    const config = parseAST(ast);
    ast = insertPropType(ast, config, key, type)
    updateFile(code, ast, filePath);
}