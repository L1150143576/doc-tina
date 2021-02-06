  
module.exports = function ({ types: t }) {
  return {
    visitor: {
      ExpressionStatement(path, { opts }) {
        const { object, property } = path.node.expression.callee
        if (object.name !== 'console') return
        if (!(opts.ignore || []).find(ele => ele === property.name)) path.remove()
      }
    }
  }
}