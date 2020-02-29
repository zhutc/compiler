const ASTNode = require('./ASTNode')
const ASTNodeType = require('./ASTNodeType')
const TokenType = require('./TokenType')
const SimpleTokenReader = require('./SimpleTokenReader')
const SimpleASTNode = require('./SimpleASTNode')

/*
 * 实现一个计算器,旨在练习由上下文无关文法生成算法.
 * 使用一下文法：
 * add : mul | mul + add
 * mul : pri | pri * mul
 * pri : IntLiteral | Identifier | ( add )
 * 注意：这个文法存在结合性问题，将add和mul变成了右结合性！
 */
class SimpleCalculator {

    /**
     * 解析基础表达式: pri : IntLiteral | Identifier | ( add )
     * @param {SimpleTokenReader} tokenReader 
     */
    primary(tokenReader) {
        let node = null
        let token = tokenReader.peek()
        if (!token) {
            return node
        }
        if (token.getType() == TokenType.IntLiteral) { // 整形字面量
            token = tokenReader.read()
            node = new SimpleASTNode(ASTNodeType.IntLiteral, token.getText())
            return node
        }
        if (token.getType() == TokenType.Identifier) { // 变量
            token = tokenReader.read()
            node = new SimpleASTNode(ASTNodeType.Identifier, token.getText())
            return node
        }

        if (token.getType() == TokenType.LeftParen) { // 嵌套加法表达式
            token = tokenReader.read()
            node = this.additive(tokenReader)
            if (!node) {
                throw `primary 匹配 (add) 失败`
            }
            token = tokenReader.peek()
            if (token.getType() != TokenType.RightParen) {
                let error = `primary 匹配()表达式失败，缺少)`
                throw error
            }
            tokenReader.read()
            return node
        }
        return null
    }

    /**
     * 解析乘法表达式 mul : pri | pri * mul
     * @param {SimpleTokenReader} tokenReader 
     */
    multiplicative(tokenReader) {
        let priNode = this.primary(tokenReader)
        if (!priNode) {
            return null
        }
        let token = tokenReader.peek()
        if (!token || token.getType() != TokenType.Star) {
            return priNode
        }
        token = tokenReader.read() // 消费 *
        let mulNode = this.multiplicative(tokenReader)
        if (!mulNode) {
            throw `multiplicative 匹配 multiplicative出错`
        }
        let node = new SimpleASTNode(ASTNodeType.Multiplicative, token.getText())
        node.addChild(priNode)
        node.addChild(mulNode)

        return node
    }

    /**
     * 解析加法表达式 add : mul | mul + add
     * @param {SimpleTokenReader} tokenReader 
     */
    additive(tokenReader) {
        let mulNode = this.multiplicative(tokenReader)
        if (!mulNode) {
            return null
        }
        let token = tokenReader.peek()
        if (!token || token.getType() != TokenType.Plus) {  // 匹配 +
            return mulNode
        }
        token = tokenReader.read() // 消费 +
        let addNode = this.additive(tokenReader)
        if (!addNode) {
            throw `additive 匹配 additive 报错：+之后没有additive表达式`
        }
        let node = new SimpleASTNode(ASTNodeType.Additive, token.getText())
        node.addChild(mulNode)
        node.addChild(addNode)
        return node
    }

    /**
     * 打印AST树
     * @param {SimpleASTNode} node 
     * @param {String} indent 
     */
    dumpAST(node, indent = '') {
        console.log(`${indent} ${ASTNodeType.formateType(node.getType())} ${node.getText()}`)
        for (const n of node.getChildren()) {
            this.dumpAST(n, `${indent}\t`)
        }
    }
}



module.exports = SimpleCalculator;

