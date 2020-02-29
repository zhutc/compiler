const SimpleCalculator = require('./SimpleCalculator')
const SimpleLexer = require('./SimpleLexer') // 词法解析

function testPrimary(script) {
    let lexer = new SimpleLexer()
    let calculator = new SimpleCalculator()
    let tokenReader = lexer.tokenize(script)
    let node = calculator.primary(tokenReader)
    calculator.dumpAST(node)
}


function testMul(script) {
    let lexer = new SimpleLexer()
    let tokenReader = lexer.tokenize(script)
    let calculator = new SimpleCalculator()
    let node = calculator.multiplicative(tokenReader)
    calculator.dumpAST(node)
}

function testAdd(script) {
    let lexer = new SimpleLexer()
    let tokenReader = lexer.tokenize(script)
    let calculator = new SimpleCalculator()
    let node = calculator.additive(tokenReader)
    calculator.dumpAST(node)
}

function testProgramm(script) {
    let lexer = new SimpleLexer()
    let tokenReader = lexer.tokenize(script)
    let calculator = new SimpleCalculator()
    let reuslt = calculator.programm(tokenReader)
    console.log(`testProgramm : ${reuslt}`)
}
try {
    // testMul('2 * ( 32 * 4 ) * 5')
    testProgramm(' 2 + 3 + 4  +  5')
} catch (error) {
    console.log(error);
}