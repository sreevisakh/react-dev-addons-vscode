const babelTraverse = require('@babel/traverse').default;
const parser = require('./parser')

module.exports = function parseAST(ast) {
    let config = {
        propTypesImported: false,
        componentName: ''
    }
    babelTraverse(ast, {
        enter(path) {
            if(!config.propTypesImported){
                config.propTypesImported = parser.isPropTypesImport(path.node);
            }
            if(!config.componentName){
                config.componentName = parser.findDefaultExport(path.node);
            }
        }
    });
    return config;
}
