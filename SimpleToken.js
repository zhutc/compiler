module.exports = class SimpleToken {
    constructor() {
        this.type = null
        this.text = null
    }
    getText() {
        return this.text
    }
    getType() {
        return this.type
    }
}
