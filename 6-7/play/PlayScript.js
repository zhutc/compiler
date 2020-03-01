/**
 * 使用Antlr重构之前的计算器，仅仅演示加乘法，只是为了初体验Antlr
 */
const Antlr = require('antlr4');
const { PlayScriptLexer } = require('./PlayScriptLexer')
const { PlayScriptParser } = require('./PlayScriptParser')
const ASTEvaluator = require('./ASTEvaluator')

class PlayScript {
    main() {
        let script = ' 1 + 2 + 3 ;'
        let chars = new Antlr.InputStream(script);
        let lexer = new PlayScriptLexer(chars);
        let tokens = new Antlr.CommonTokenStream(lexer);
        let parser = new PlayScriptParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.additiveExpression();

        let visitor = new ASTEvaluator()
        let result = visitor.visit(tree)
        console.log(`result = ${result}`)


    }
}


let play = new PlayScript()
play.main()
