/**
 * AST节点的类型。
 */


let ASTNodeType = {}
let types = [
    "Programm",           //程序入口，根节点

    "IntDeclaration",     //整型变量声明
    "ExpressionStmt",     //表达式语句，即表达式后面跟个分号
    "AssignmentStmt",     //赋值语句

    "Primary",            //基础表达式
    "Multiplicative",     //乘法表达式
    "Additive",           //加法表达式

    "Identifier",         //标识符
    "IntLiteral"          //整型字面量
]

for (let index = 0; index < types.length; index++) {
    const key = types[index];
    ASTNodeType[key] = index
}
ASTNodeType.formateType = function(type){
    return types[type]
}
module.exports = ASTNodeType