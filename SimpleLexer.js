// 词法分析器
const TokenType = require('./TokenType')
const SimpleTokenReader = require('./SimpleTokenReader')
const SimpleToken = require('./SimpleToken')

const DfaState = {
    Initial: 0,
    Int: 1,
    Id_int1: 2,
    Id_int2: 3,
    Id_int3: 4,
    GT: 5,
    GE: 6,
    Id: 7,
    Assignment: 8,
    Plus: 9,
    Minus: 10,
    Star: 11,
    Slash: 12,
    SemiColon: 13,
    LeftParen: 14,
    RightParen: 15,
    IntLiteral: 16,
}

class SimpleLexer {
    constructor() {
        this.token = null
        this.tokens = []
        this.tokenText = null
    }

    tokenize(code) {
        this.token = new SimpleToken()
        this.tokenText = ''
        let state = DfaState.Initial // 初始状态
        for (const ch of code) { //遍历字符
            switch (state) {
                case DfaState.Initial:
                case DfaState.Star:
                case DfaState.LeftParen:
                case DfaState.RightParen:
                case DfaState.Plus:
                    {
                        state = this.initToken(ch)
                    }
                    break;
                case DfaState.Id_int1: // int中的i
                    {
                        state = DfaState.Id_int2
                        this.tokenText += ch
                    }
                    break;
                case DfaState.Id_int2:
                    {
                        state = DfaState.Id_int3
                        this.token.type = TokenType.Int
                        this.tokenText += ch
                    }
                    break;
                case DfaState.Id_int3:
                    {
                        if (this.isBlank(ch)) {
                            state = this.initToken(ch)
                        } else {
                            this.token.type = TokenType.Identifier
                            state = DfaState.Id
                            this.tokenText += ch
                        }
                    }
                case DfaState.Id:
                    {
                        if (!this.isAlpha(ch) && !this.isDigit(ch)) { //非数字字母
                            state = this.initToken(ch)
                        } else {
                            this.tokenText += ch
                        }
                    }
                    break;
                case DfaState.IntLiteral:
                    {
                        if (!this.isDigit(ch)) {
                            state = this.initToken(ch)
                        } else {
                            this.tokenText += ch
                        }
                    }
                default:
                    break;
            }
        }

        if (this.tokenText.length) { // 结算最后一个token
            this.initToken(0)
        }
        return new SimpleTokenReader(this.tokens)
    }

    initToken(ch) {
        if (this.tokenText.length) { // 结算上一个token
            this.token.text = this.tokenText
            this.tokens.push(this.token)
            this.token = new SimpleToken()
            this.tokenText = ''
        }
        let newState = DfaState.Initial
        if (this.isAlpha(ch)) {
            if (ch == 'i') {
                newState = DfaState.Id_int1
            } else {
                newState = DfaState.Id
            }
            this.token.type = TokenType.Identifier
            this.tokenText += ch
        } else if (this.isDigit(ch)) {
            newState = DfaState.IntLiteral
            this.token.type = TokenType.IntLiteral
            this.tokenText += ch
        } else if (this.isStar(ch)) {
            newState = DfaState.Star
            this.token.type = TokenType.Star
            this.tokenText = ch
        } else if (this.isLeftParen(ch)) {
            newState = DfaState.LeftParen
            this.token.type = TokenType.LeftParen
            this.tokenText = ch
        } else if (this.isRightParen(ch)) {
            newState = DfaState.RightParen
            this.token.type = TokenType.RightParen
            this.tokenText = ch
        } else if (this.isPlus(ch)) {
            newState = DfaState.Plus
            this.token.type = TokenType.Plus
            this.tokenText = ch
        }


        return newState
    }

    isAlpha(ch) {
        return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')
    }

    isDigit(ch) {
        return ch >= '0' && ch <= '9'
    }

    isBlank(ch) {
        return ch == ' ' || ch == '\n' || ch == '\t'
    }

    isStar(ch) { // 乘法
        return ch == '*'
    }

    isLeftParen(ch) {
        return ch == '('
    }
    isRightParen(ch) {
        return ch == ')'
    }

    isPlus(ch) {
        return ch == '+'
    }
}






function dump(reader) {
    let token = null
    while (token = reader.read()) {
        console.log(`${token.text}\t\t${TokenType.formate(token.type)}`)
    }
}


module.exports = SimpleLexer


if (process.mainModule == module) {
    (function () {
        let code = 'int'
        let lexer = new SimpleLexer()
        let reader = lexer.tokenize(code)
        console.log(`code ${code}`)
        dump(reader)

        code = 'int abc '
        lexer = new SimpleLexer()
        reader = lexer.tokenize(code)
        console.log(`code ${code}`)
        dump(reader)
    })()
}