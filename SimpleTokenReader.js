module.exports = class SimpleTokenReader {
    constructor(tokens) {
        this.tokens = tokens || []
        this.pos = 0
    }
    read() {
        if (this.pos < this.tokens.length) {
            return this.tokens[this.pos++]
        }
        return null
    }
    peek() {
        if (this.pos < this.tokens.length) {
            return this.tokens[this.pos]
        }
        return null
    }
    unread() {
        if (this.pos > 0) {
            this.pos--
        }
    }
    setPosition(position) {
        if (this.pos >= 0 && position < this.tokens.length) {
            this.pos = position
        }
    }
}