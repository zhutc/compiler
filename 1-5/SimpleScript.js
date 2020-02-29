const ReadLine = require('readline')
const SimpleParser = require('./SimpleParser')
const ASTNodeType = require('./ASTNodeType')

class SimpleScript {
    constructor() {
        this.parser = new SimpleParser()
        this.variables = {}
    }
    start() {
        const rl = ReadLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', this.onLine.bind(this))
    }
    onLine(line) {
        let node = this.parser.parse(line)
        this.evaluate(node)
    }

    /**
     * 计算值
     * @param {SimpleASTNode} node 
     * @param {String} indent 
     */
    evaluate(node, indent) {
        let result = 0
        switch (node.getType()) {
            case ASTNodeType.IntDeclaration: {
                let vName = node.getText()
                this.variables[vName] = 0
                if (node.getChildren().length > 0) { // 存在加法节点
                    this.variables[vName] = this.evaluate(node.getChildren()[0], `${indent}\t`)
                }
            }
                break;
            case ASTNodeType.AssignmentStmt: {
                let vName = node.getText()
                this.variables[vName] = this.evaluate(node.getChildren()[0], `${indent}\t`)
            }
                break;

            case ASTNodeType.ExpressionStmt: {

            }
                break;
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

            case ASTNodeType.Identifier: { // 变量
                result = this.variables[node.getText()]
            }
            default:
                break;
        }

        if(node.getType() == ASTNodeType.IntDeclaration || node.getType() == ASTNodeType.AssignmentStmt){
            console.log(`${node.getText()} : ${this.variables[node.getText()]}`)
        }
        return result
    }
}

let repl = new SimpleScript()
repl.start()