const { PlayScriptVisitor } = require('./PlayScriptVisitor')

class ASTEvaluator extends PlayScriptVisitor {

    visitPrimaryExpression(ctx) {
        if (ctx.IntegerLiteral() != null) {
            return Number(ctx.IntegerLiteral().getText())
        }
        return 0;
    }

    visitAdditiveExpression(ctx) {
        let left = this.visitMultiplicativeExpression(ctx.multiplicativeExpression());
        let right = 0
        if (ctx.additiveExpression()) {
            right = this.visitAdditiveExpression(ctx.additiveExpression())
        }
        return left + right;
    }

    visitMultiplicativeExpression(ctx) {
        let left = this.visitPrimaryExpression(ctx.primaryExpression());
        let right = 1
        if (ctx.multiplicativeExpression()) {
            right = this.visitMultiplicativeExpression(ctx.multiplicativeExpression());
        }
        return left * right
    }
}

module.exports = ASTEvaluator