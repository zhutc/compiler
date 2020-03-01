const { PlayScriptVisitor } = require('./PlayScriptVisitor')

class ASTEvaluator extends PlayScriptVisitor {
    visitLiteral(ctx) {
        if (ctx.IntegerLiteral()) {
            return Number(ctx.IntegerLiteral().getText())
        }
        return 0

    }

    visitPrimaryExpression(ctx) {
        if (ctx.literal() != null) {
            return this.visitLiteral(ctx.literal());
        }
        return 0;
    }

    visitAdditiveExpression(ctx) {
        if (ctx.ADD() != null || ctx.SUB() != null) {
            let left = this.visitAdditiveExpression(ctx.additiveExpression());
            let right = this.visitMultiplicativeExpression(ctx.multiplicativeExpression());
            if (ctx.ADD() != null) {
                return left + right;
            } else {
                return left - right;
            }
        } else {
            return this.visitMultiplicativeExpression(ctx.multiplicativeExpression());
        }
    }

    visitMultiplicativeExpression(ctx) {
        if (ctx.MUL() != null || ctx.DIV() != null || ctx.MOD() != null) {
            let left = this.visitMultiplicativeExpression(ctx.multiplicativeExpression());
            let right = this.visitPrimaryExpression(ctx.primaryExpression());
            if (ctx.MUL() != null) {
                return left * right;
            } else if (ctx.DIV() != null) {
                return left / right;
            } else {
                return left % right;
            }
        } else {
            return this.visitPrimaryExpression(ctx.primaryExpression());
        }
    }
}

module.exports = ASTEvaluator