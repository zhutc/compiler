/**
 * AST的节点。
 * 属性包括AST的类型、文本值、下级子节点和父节点
 */
module.exports = class ASTNode {
    //父节点
    getParent(){}
    //子节点
    getChildren(){}
    //AST类型
    getType(){}
    //文本值
    getText(){}
}