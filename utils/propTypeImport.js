const t = require('@babel/types');

module.exports = t.importDeclaration([
    t.importDefaultSpecifier(t.identifier("PropTypes"))
], t.stringLiteral("prop-types"));

