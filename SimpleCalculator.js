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
 * 
 * 文法的推导过程：原则上是产生式尽可能多的匹配token，表达式不满足则回溯匹配其他表达式
    先给产生式标记代号，为了简化演示，将pri直接使用整形字面量代替
     add : mul（A1） | mul + add （A2）
     mul : IntLiteral （B1） | IntLiteral * mul （B2）
     例如：2 + 3 * 5
     add -> A1 先试用A1匹配
         -> B1 (2) 从A1展开到B1,匹配到token(2),后续还有四个token，匹配该产生式失败
         -> IntLiteral(2) 成功匹配到第一个token（2）
         -> B2 继续mul的第二个产生式匹配剩余token，因为下一个token是 + ， mul的产生式全部匹配失败，退回到A2继续匹配
         —> A2 
         -> B1 + add  
         -> IntLiteral (2) + add // 匹配token (2)
         -> B2 + add 尝试匹配B2，因为后续是+，失败 ，回溯到A2继续
         -> IntLiteral (2) + mul // 匹配token (+)
         => IntLiteral (2) + B1  
         -> IntLiteral (2) + IntLiteral(3) // 后续还有token，
         -> IntLiteral (2) + B2 // 尝试 B2 
         -> IntLiteral (2) + IntLiteral(3) * mul
         -> IntLiteral (2) + IntLiteral(3) * B1
         -> IntLiteral (2) + IntLiteral(3) * IntLiteral(5)

    根据上述的推导可以得出：
    1. 文法会尽可能多的去匹配token，即使已命中靠前的规则，如（匹配成功B1,还是继续尝试B2）
    2. 通过匹配最终最终找到合适的路径将token消耗完毕

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

    /**
     * 对表达是求值
     * @param {SimpleASTNode} node 
     * @param {String} indent 
     */
    evaluate(node, indent) {
        let result = 0
        switch (node.getType()) {
            case ASTNodeType.Programm: { // 如果是计算根节点
                result = this.evaluate(node.getChildren()[0], `${indent}\t`)
            }
                break;
            case ASTNodeType.Additive: { // 加法节点
                let lResult = this.evaluate(node.getChildren()[0], `${indent}\t`)
                let rResult = this.evaluate(node.getChildren()[1], `${indent}\t`)
                result = lResult + rResult
            }
                break;
            case ASTNodeType.Multiplicative: { // 乘法节点
                let lResult = this.evaluate(node.getChildren()[0], `${indent}\t`)
                let rResult = this.evaluate(node.getChildren()[1], `${indent}\t`)
                result = lResult * rResult

            }
                break;
            case ASTNodeType.IntLiteral: { // 整形字面量
                result = Number(node.getText())
            }
                break;
            default:
                break;
        }
        return result
    }
    /**
     * 计算器
     * @param {SimpleTokenReader} tokenReader 
     */
    programm(tokenReader) {
        let rootNode = new SimpleASTNode(ASTNodeType.Programm, 'Calculator')
        let add = this.additive(tokenReader)
        rootNode.addChild(add)

        this.dumpAST(rootNode)
        let result = this.evaluate(rootNode)
        return result
    }

}



module.exports = SimpleCalculator;

