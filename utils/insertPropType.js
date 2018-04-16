const babelTraverse = require('@babel/traverse').default;
const parser = require('./parser');
const t = require('@babel/types');
const propTypes = require('./propTypes');
const propTypeImport = require('./propTypeImport');
const babylon = require('babylon');

module.exports = function insertPropType (ast, config, key, type) {
  let propTypesObjectFound = false;
  babelTraverse(ast, {
    Program(path){
      if(!config.propTypesImported) {
        path.node.body.unshift(propTypeImport)
      }
    },
    Identifier(path) {
      if(path.node.name === 'propTypes') {
        let propTypesObjectFound = true;
        let properties;
        //if Prototype object
        if(path.parentPath.parentPath.node.right){
          properties = path.parentPath.parentPath.node.right.properties
          properties = properties.map(item => item.key.name)
          if(!properties.includes(key)) {
            path.parentPath.parentPath.node.right.properties.push(
                propTypes[type](key)
            )
          }
        } else if(path.parentPath.node.value){
          //if class property
          properties = path.parentPath.node.value.properties
          properties = properties.map(item => item.key.name)
          if(!properties.includes(key)) {
            path.parentPath.node.value.properties.push(
                propTypes[type](key)
            )
          }
        }
      }
    },
    enter(path) {
      if(!config.componentType) {
          config.componentType = parser.getReactComponentType(path, config);
      }
    }
  });
  return ast;
    // if(!propTypesObjectFound && config.componentType){

    //     babelTraverse(ast, {
    //         enter(path) {
    //             if(config.componentType === 'class' && t.classDeclaration(path.node)){
    //                 if(t.classDeclaration(path.node)){
    //                 }
    //             }        
    //         }
    //     });
    // }
}