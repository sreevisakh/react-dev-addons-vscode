const t = require('@babel/types');
const babylon = require('babylon')
exports.stringRequired = (property) => t.objectProperty(
    t.identifier(property), babylon.parseExpression('PropTypes.string.isRequired')
    // t.memberExpression(
    //     t.memberExpression(
    //         t.identifier('PropTypes'), 
    //         t.identifier('string')
    //     ),
    //     t.identifier("isRequired")
    // )
) 