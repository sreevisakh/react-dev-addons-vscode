const t = require('@babel/types');
const babylon = require('babylon')
exports.stringRequired = (property) => t.objectProperty(
    t.identifier(property), babylon.parseExpression('PropTypes.string.isRequired')
) 

exports.booleanRequired = (property) => t.objectProperty(
    t.identifier(property), babylon.parseExpression('PropTypes.bool.isRequired')
) 

exports.functionRequired = (property) => t.objectProperty(
    t.identifier(property), babylon.parseExpression('PropTypes.func.isRequired')
) 

exports.shapeRequired = (property) => t.objectProperty(
    t.identifier(property), babylon.parseExpression('PropTypes.shape({}).isRequired')
) 

exports.arrayOfRequired = (property) => t.objectProperty(
    t.identifier(property), babylon.parseExpression('PropTypes.arrayOf({}).isRequired')
) 

exports.booleanRequired = (property) => t.objectProperty(
    t.identifier(property), babylon.parseExpression('PropTypes.bool.isRequired')
) 