const ASTNode = require('./ASTNode')

class SimpleASTNode extends ASTNode {
    /**
     * 
     * @param {*} nodeType 
     * @param {*} text 
     */
    constructor(nodeType, text) {
        super()
        this.nodeType = nodeType
        this.text = text
        this.parent = null
        this.children = []
    }

    getParent() {
        return this.parent
    }

    getType() {
        return this.nodeType
    }
    getText() {
        return this.text
    }
    addChild(child) {
        this.children.push(child)
        child.parent = this
    }
    getChildren(){
        return this.children.map((item)=>{ return item })
    }
}

module.exports = SimpleASTNode