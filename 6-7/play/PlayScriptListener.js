// Generated from PlayScript.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by PlayScriptParser.
function PlayScriptListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

PlayScriptListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PlayScriptListener.prototype.constructor = PlayScriptListener;

// Enter a parse tree produced by PlayScriptParser#additiveExpression.
PlayScriptListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by PlayScriptParser#additiveExpression.
PlayScriptListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by PlayScriptParser#multiplicativeExpression.
PlayScriptListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by PlayScriptParser#multiplicativeExpression.
PlayScriptListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by PlayScriptParser#primaryExpression.
PlayScriptListener.prototype.enterPrimaryExpression = function(ctx) {
};

// Exit a parse tree produced by PlayScriptParser#primaryExpression.
PlayScriptListener.prototype.exitPrimaryExpression = function(ctx) {
};



exports.PlayScriptListener = PlayScriptListener;