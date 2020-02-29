const ASTNode = require('./ASTNode')
const ASTNodeType = require('./ASTNodeType')
const TokenType = require('./TokenType')
const SimpleTokenReader = require('./SimpleTokenReader')
const SimpleASTNode = require('./SimpleASTNode')
const SimpleLexer = require('./SimpleLexer')
/**
 * 一个简单的语法解析器。
 * 能够解析简单的表达式、变量声明和初始化语句、赋值语句。
 * 它支持的语法规则为：
 *
 * programm -> intDeclare | expressionStatement | assignmentStatement
 * assignmentStatement : Identifier '=' addtive ';'
 * intDeclare -> 'int' Identifier ( = additive)? ';'
 * expressionStatement -> addtive ';'
 * addtive -> multiplicative ( (+ | -) multiplicative)*
 * multiplicative -> primary ( (* | /) primary)*
 * primary -> IntLiteral | Id | (additive)
 */

class SimpleParser {

    /**
     * intDeclare -> 'int' Identifier ( = additive)? ';'
     * @param {SimpleTokenReader} tokenReader 
     */
    intDeclare(tokenReader) {
        let token = tokenReader.peek()
        if (!token || token.getType() != TokenType.Int) {
            return null
        }
        token = tokenReader.read()

        token = tokenReader.peek()
        if (!token || token.getType() != TokenType.Identifier) {
            throw `intDeclare 匹配失败 : 没有 Identifier`
        }
        token = tokenReader.read()
        let intNode = new SimpleASTNode(ASTNodeType.IntDeclaration, token.getText())

        token = tokenReader.peek()
        if (!token || token.getType() != TokenType.Assignment) {
            throw `intDeclare 匹配失败 : 没有 =`
        }
        token = tokenReader.read()
        let addNode = this.additive(tokenReader)
        if (addNode) {
            intNode.addChild(addNode)
        }
        token = tokenReader.peek()
        if (!token || token.getType() != TokenType.SemiColon) {
            throw `intDeclare 匹配失败 : 没有 ;`
        }

        tokenReader.read()
        return intNode
    }

    /**
     * 赋值语句，如age = 10*2; assignmentStatement : Identifier '=' addtive ';'
     * @param {SimpleTokenReader} tokenReader 
     */
    assignmentStatement(tokenReader) {
        let token = tokenReader.peek()
        if (!token || token.getType() != TokenType.Identifier) { // 不是标识符
            return null
        }
        token = tokenReader.read()
        let asNode = new SimpleASTNode(ASTNodeType.AssignmentStmt, token.getText())
        token = tokenReader.peek()
        if (!token || token.getType() != TokenType.Assignment) { // 不是 =
            tokenReader.unread() // 回溯
            return null
        }
        token = tokenReader.read() // 消费 =
        let addNode = this.additive(tokenReader)
        if (!addNode) { // 未命中表达式
            throw `assignmentStatement 匹配失败 : 没有匹配到 additive`
        }
        token = tokenReader.peek()
        if (!token || token.getType() != TokenType.SemiColon) {
            throw `assignmentStatement 匹配失败 : 缺少;`
        }
        token = tokenReader.read()
        asNode.addChild(addNode)
        return asNode
    }

    /**
     * 表达式语句，即表达式后面跟个分号。expressionStatement -> addtive ';'
     * @param {SimpleTokenReader} tokenReader 
     */
    expressionStatement(tokenReader) {
        let poi = tokenReader.getPosition()
        let addNode = this.additive(tokenReader)
        if (!addNode) {
            return null
        }
        let token = tokenReader.peek()
        if (!token || token.getType() != TokenType.SemiColon) {
            tokenReader.setPosition(poi) // 回溯
            return null
        }
        token = tokenReader.read()
        let expNode = new SimpleASTNode(ASTNodeType.ExpressionStmt, token.getText())
        expNode.addChild(addNode)
        return expNode
    }
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
        /** 使用循环代替递归  */
        let mulNode = this.multiplicative(tokenReader)
        if (!mulNode) {
            return null
        }
        while (true) {
            let token = tokenReader.peek()
            if (!token || token.getType() != TokenType.Plus) {  // 匹配 +
                break
            }
            token = tokenReader.read()
            let nextMulNode = this.multiplicative(tokenReader)
            if (!nextMulNode) {
                throw `additive 匹配 multiplicative 报错：+之后没有multiplicative表达式`
            }
            let node = new SimpleASTNode(ASTNodeType.Additive, token.getText())
            node.addChild(mulNode)
            node.addChild(nextMulNode)
            mulNode = node
        }
        return mulNode
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
     * 计算器
     * @param {SimpleTokenReader} tokenReader 
     */
    programm(tokenReader) {
        let rootNode = new SimpleASTNode(ASTNodeType.Programm, 'REPL')
        while (tokenReader.peek()) {
            let child = this.intDeclare(tokenReader)
            if(!child){
                child = this.expressionStatement(tokenReader)
            }
            if(!child){
                child = this.assignmentStatement(tokenReader)
            }
            if(child){
                rootNode.addChild(child)
            }
            break;
        }
        return rootNode
    }


    parse(script) {
        let lexer = new SimpleLexer()
        let tokenReader = lexer.tokenize(script)
        let node = this.programm(tokenReader)
        return node
        
    }
}



module.exports = SimpleParser;

