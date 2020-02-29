const SimpleParser = require('./SimpleParser')
const SimpleLexer = require('./SimpleLexer') // 词法解析

function testAssign(script) {
    let lexer = new SimpleLexer()
    let parser = new SimpleParser()
    let tokenReader = lexer.tokenize(script)
    let node = parser.assignmentStatement(tokenReader)
    parser.dumpAST(node)
}

function testIntDeclare(script) {
    let lexer = new SimpleLexer()
    let parser = new SimpleParser()
    let tokenReader = lexer.tokenize(script)
    let node = parser.intDeclare(tokenReader)
    parser.dumpAST(node)
}

function testExpress(script) {
    let lexer = new SimpleLexer()
    let parser = new SimpleParser()
    let tokenReader = lexer.tokenize(script)
    let node = parser.expressionStatement(tokenReader)
    parser.dumpAST(node)
}


try {
    // testMul('2 * ( 32 * 4 ) * 5')
    testAssign(' age =  age + 1;  ')
    // testIntDeclare(' int a = 5;  ')
    // testExpress(' a + 5 + 6 ;  ')
} catch (error) {
    console.log(error);
}