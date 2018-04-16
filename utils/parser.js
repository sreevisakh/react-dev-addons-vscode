const t = require('@babel/types');

exports.findDefaultExport = function (node){
    if(t.isExportDefaultDeclaration(node)){
        if(t.isCallExpression(node.declaration)){
            return node.declaration.arguments[0].name
        } else if(t.isClassDeclaration(node.declaration)){
            return node.declaration.id.name
        } else if(t.isIdentifier(node.declaration)){
            return node.declaration.name
        }
    }
}
exports.isPropTypesImport = function (node){
    if(t.isImportDeclaration(node)){
        return node.source.value ==='prop-types';
    }
    return false;
}

exports.getReactComponentType = function (path, config){
    if(t.isIdentifier(path.node)){
        if(path.node.name === config.componentName){
            if(t.isClassDeclaration(path.parent)) {
                return 'class';
            } else if(t.isVariableDeclarator(path.parent)) {
                return 'functional';
            } else if(t.isFunctionDeclaration(path.parent)) {
                return 'functional';
            }  
        }      
    }
}