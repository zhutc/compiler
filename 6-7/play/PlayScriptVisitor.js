// Generated from PlayScript.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PlayScriptParser.

function PlayScriptVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PlayScriptVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PlayScriptVisitor.prototype.constructor = PlayScriptVisitor;

// Visit a parse tree produced by PlayScriptParser#additiveExpression.
PlayScriptVisitor.prototype.visitAdditiveExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#multiplicativeExpression.
PlayScriptVisitor.prototype.visitMultiplicativeExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#primaryExpression.
PlayScriptVisitor.prototype.visitPrimaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};



exports.PlayScriptVisitor = PlayScriptVisitor;