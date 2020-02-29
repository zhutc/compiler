const TokenType = {
    Plus: 0, // +
    Minus: 1, // -
    Star: 2, // *
    Slash: 3, // /
    GE: 4, // >=
    GT: 5, // >
    EQ: 6, // ==
    LE: 7, // <=
    LT: 8, // < 
    SemiColon: 9, // ;
    LeftParen: 10, // (
    RightParen: 11, // )
    Assignment: 12, // =
    If: 13, // if
    Else: 14, // else 
    Int: 15, // int
    Identifier: 16, // 标识符
    IntLiteral: 17, // 整形字面量
    StringLiteral: 18, // 字符串字面量
    formate:function(type){ // 转换成只管的类型
        for (const key in this){
            if (this.hasOwnProperty(key)) {
                const element = this[key];
                if (element === type) {
                    return key
                }
            }
        }
    },
}
module.exports = TokenType