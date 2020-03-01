// Generated from PlayScript.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PlayScriptListener = require('./PlayScriptListener').PlayScriptListener;
var PlayScriptVisitor = require('./PlayScriptVisitor').PlayScriptVisitor;

var grammarFileName = "PlayScript.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003b(\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0007\u0002\u000f\n\u0002\f\u0002\u000e\u0002\u0012\u000b\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u0003\u001a\n\u0003\f\u0003\u000e\u0003\u001d\u000b\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004#\n\u0004\u0003\u0004",
    "\u0005\u0004&\n\u0004\u0003\u0004\u0002\u0004\u0002\u0004\u0005\u0002",
    "\u0004\u0006\u0002\u0002\u0002)\u0002\b\u0003\u0002\u0002\u0002\u0004",
    "\u0013\u0003\u0002\u0002\u0002\u0006%\u0003\u0002\u0002\u0002\b\t\b",
    "\u0002\u0001\u0002\t\n\u0005\u0004\u0003\u0002\n\u0010\u0003\u0002\u0002",
    "\u0002\u000b\f\f\u0003\u0002\u0002\f\r\u0007L\u0002\u0002\r\u000f\u0005",
    "\u0004\u0003\u0002\u000e\u000b\u0003\u0002\u0002\u0002\u000f\u0012\u0003",
    "\u0002\u0002\u0002\u0010\u000e\u0003\u0002\u0002\u0002\u0010\u0011\u0003",
    "\u0002\u0002\u0002\u0011\u0003\u0003\u0002\u0002\u0002\u0012\u0010\u0003",
    "\u0002\u0002\u0002\u0013\u0014\b\u0003\u0001\u0002\u0014\u0015\u0005",
    "\u0006\u0004\u0002\u0015\u001b\u0003\u0002\u0002\u0002\u0016\u0017\f",
    "\u0003\u0002\u0002\u0017\u0018\u0007N\u0002\u0002\u0018\u001a\u0005",
    "\u0006\u0004\u0002\u0019\u0016\u0003\u0002\u0002\u0002\u001a\u001d\u0003",
    "\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003",
    "\u0002\u0002\u0002\u001c\u0005\u0003\u0002\u0002\u0002\u001d\u001b\u0003",
    "\u0002\u0002\u0002\u001e&\u0007*\u0002\u0002\u001f&\u0007_\u0002\u0002",
    " \"\u00070\u0002\u0002!#\u0005\u0002\u0002\u0002\"!\u0003\u0002\u0002",
    "\u0002\"#\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$&\u0007",
    "1\u0002\u0002%\u001e\u0003\u0002\u0002\u0002%\u001f\u0003\u0002\u0002",
    "\u0002% \u0003\u0002\u0002\u0002&\u0007\u0003\u0002\u0002\u0002\u0006",
    "\u0010\u001b\"%"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'boolean'", "'break'", "'byte'", "'case'", "'catch'", 
                     "'char'", "'class'", "'const'", "'continue'", "'default'", 
                     "'do'", "'double'", "'else'", "'enum'", "'extends'", 
                     "'final'", "'finally'", "'float'", "'for'", "'if'", 
                     "'implements'", "'import'", "'instanceof'", "'int'", 
                     "'interface'", "'long'", "'native'", "'new'", "'package'", 
                     "'private'", "'protected'", "'public'", "'return'", 
                     "'short'", "'super'", "'switch'", "'this'", "'void'", 
                     "'while'", null, null, null, null, null, "'null'", 
                     "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", 
                     "'.'", "'...'", "'@'", "'::'", "'='", "'>'", "'<'", 
                     "'!'", "'~'", "'?'", "':'", "'->'", "'=='", "'<='", 
                     "'>='", "'!='", "'&&'", "'||'", "'++'", "'--'", "'+'", 
                     "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'+='", 
                     "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", 
                     "'<<='", "'>>='", "'>>>='" ];

var symbolicNames = [ null, "BOOLEAN", "BREAK", "BYTE", "CASE", "CATCH", 
                      "CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", 
                      "DOUBLE", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", 
                      "FLOAT", "FOR", "IF", "IMPLEMENTS", "IMPORT", "INSTANCEOF", 
                      "INT", "INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE", 
                      "PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", 
                      "SUPER", "SWITCH", "THIS", "VOID", "WHILE", "IntegerLiteral", 
                      "FloatingPointLiteral", "BooleanLiteral", "CharacterLiteral", 
                      "StringLiteral", "NullLiteral", "LPAREN", "RPAREN", 
                      "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", 
                      "DOT", "ELLIPSIS", "AT", "COLONCOLON", "ASSIGN", "GT", 
                      "LT", "BANG", "TILDE", "QUESTION", "COLON", "ARROW", 
                      "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "INC", 
                      "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", "BITOR", 
                      "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", 
                      "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
                      "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", 
                      "Identifier", "WS", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "additiveExpression", "multiplicativeExpression", "primaryExpression" ];

function PlayScriptParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PlayScriptParser.prototype = Object.create(antlr4.Parser.prototype);
PlayScriptParser.prototype.constructor = PlayScriptParser;

Object.defineProperty(PlayScriptParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PlayScriptParser.EOF = antlr4.Token.EOF;
PlayScriptParser.BOOLEAN = 1;
PlayScriptParser.BREAK = 2;
PlayScriptParser.BYTE = 3;
PlayScriptParser.CASE = 4;
PlayScriptParser.CATCH = 5;
PlayScriptParser.CHAR = 6;
PlayScriptParser.CLASS = 7;
PlayScriptParser.CONST = 8;
PlayScriptParser.CONTINUE = 9;
PlayScriptParser.DEFAULT = 10;
PlayScriptParser.DO = 11;
PlayScriptParser.DOUBLE = 12;
PlayScriptParser.ELSE = 13;
PlayScriptParser.ENUM = 14;
PlayScriptParser.EXTENDS = 15;
PlayScriptParser.FINAL = 16;
PlayScriptParser.FINALLY = 17;
PlayScriptParser.FLOAT = 18;
PlayScriptParser.FOR = 19;
PlayScriptParser.IF = 20;
PlayScriptParser.IMPLEMENTS = 21;
PlayScriptParser.IMPORT = 22;
PlayScriptParser.INSTANCEOF = 23;
PlayScriptParser.INT = 24;
PlayScriptParser.INTERFACE = 25;
PlayScriptParser.LONG = 26;
PlayScriptParser.NATIVE = 27;
PlayScriptParser.NEW = 28;
PlayScriptParser.PACKAGE = 29;
PlayScriptParser.PRIVATE = 30;
PlayScriptParser.PROTECTED = 31;
PlayScriptParser.PUBLIC = 32;
PlayScriptParser.RETURN = 33;
PlayScriptParser.SHORT = 34;
PlayScriptParser.SUPER = 35;
PlayScriptParser.SWITCH = 36;
PlayScriptParser.THIS = 37;
PlayScriptParser.VOID = 38;
PlayScriptParser.WHILE = 39;
PlayScriptParser.IntegerLiteral = 40;
PlayScriptParser.FloatingPointLiteral = 41;
PlayScriptParser.BooleanLiteral = 42;
PlayScriptParser.CharacterLiteral = 43;
PlayScriptParser.StringLiteral = 44;
PlayScriptParser.NullLiteral = 45;
PlayScriptParser.LPAREN = 46;
PlayScriptParser.RPAREN = 47;
PlayScriptParser.LBRACE = 48;
PlayScriptParser.RBRACE = 49;
PlayScriptParser.LBRACK = 50;
PlayScriptParser.RBRACK = 51;
PlayScriptParser.SEMI = 52;
PlayScriptParser.COMMA = 53;
PlayScriptParser.DOT = 54;
PlayScriptParser.ELLIPSIS = 55;
PlayScriptParser.AT = 56;
PlayScriptParser.COLONCOLON = 57;
PlayScriptParser.ASSIGN = 58;
PlayScriptParser.GT = 59;
PlayScriptParser.LT = 60;
PlayScriptParser.BANG = 61;
PlayScriptParser.TILDE = 62;
PlayScriptParser.QUESTION = 63;
PlayScriptParser.COLON = 64;
PlayScriptParser.ARROW = 65;
PlayScriptParser.EQUAL = 66;
PlayScriptParser.LE = 67;
PlayScriptParser.GE = 68;
PlayScriptParser.NOTEQUAL = 69;
PlayScriptParser.AND = 70;
PlayScriptParser.OR = 71;
PlayScriptParser.INC = 72;
PlayScriptParser.DEC = 73;
PlayScriptParser.ADD = 74;
PlayScriptParser.SUB = 75;
PlayScriptParser.MUL = 76;
PlayScriptParser.DIV = 77;
PlayScriptParser.BITAND = 78;
PlayScriptParser.BITOR = 79;
PlayScriptParser.CARET = 80;
PlayScriptParser.MOD = 81;
PlayScriptParser.ADD_ASSIGN = 82;
PlayScriptParser.SUB_ASSIGN = 83;
PlayScriptParser.MUL_ASSIGN = 84;
PlayScriptParser.DIV_ASSIGN = 85;
PlayScriptParser.AND_ASSIGN = 86;
PlayScriptParser.OR_ASSIGN = 87;
PlayScriptParser.XOR_ASSIGN = 88;
PlayScriptParser.MOD_ASSIGN = 89;
PlayScriptParser.LSHIFT_ASSIGN = 90;
PlayScriptParser.RSHIFT_ASSIGN = 91;
PlayScriptParser.URSHIFT_ASSIGN = 92;
PlayScriptParser.Identifier = 93;
PlayScriptParser.WS = 94;
PlayScriptParser.COMMENT = 95;
PlayScriptParser.LINE_COMMENT = 96;

PlayScriptParser.RULE_additiveExpression = 0;
PlayScriptParser.RULE_multiplicativeExpression = 1;
PlayScriptParser.RULE_primaryExpression = 2;


function AdditiveExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_additiveExpression;
    return this;
}

AdditiveExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditiveExpressionContext.prototype.constructor = AdditiveExpressionContext;

AdditiveExpressionContext.prototype.multiplicativeExpression = function() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
};

AdditiveExpressionContext.prototype.additiveExpression = function() {
    return this.getTypedRuleContext(AdditiveExpressionContext,0);
};

AdditiveExpressionContext.prototype.ADD = function() {
    return this.getToken(PlayScriptParser.ADD, 0);
};

AdditiveExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitAdditiveExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PlayScriptParser.prototype.additiveExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new AdditiveExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 0;
    this.enterRecursionRule(localctx, 0, PlayScriptParser.RULE_additiveExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7;
        this.multiplicativeExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 14;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_additiveExpression);
                this.state = 9;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 10;
                this.match(PlayScriptParser.ADD);
                this.state = 11;
                this.multiplicativeExpression(0); 
            }
            this.state = 16;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function MultiplicativeExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_multiplicativeExpression;
    return this;
}

MultiplicativeExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplicativeExpressionContext.prototype.constructor = MultiplicativeExpressionContext;

MultiplicativeExpressionContext.prototype.primaryExpression = function() {
    return this.getTypedRuleContext(PrimaryExpressionContext,0);
};

MultiplicativeExpressionContext.prototype.multiplicativeExpression = function() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
};

MultiplicativeExpressionContext.prototype.MUL = function() {
    return this.getToken(PlayScriptParser.MUL, 0);
};

MultiplicativeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitMultiplicativeExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PlayScriptParser.prototype.multiplicativeExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new MultiplicativeExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, PlayScriptParser.RULE_multiplicativeExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.primaryExpression();
        this._ctx.stop = this._input.LT(-1);
        this.state = 25;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_multiplicativeExpression);
                this.state = 20;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 21;
                this.match(PlayScriptParser.MUL);
                this.state = 22;
                this.primaryExpression(); 
            }
            this.state = 27;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function PrimaryExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_primaryExpression;
    return this;
}

PrimaryExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryExpressionContext.prototype.constructor = PrimaryExpressionContext;

PrimaryExpressionContext.prototype.IntegerLiteral = function() {
    return this.getToken(PlayScriptParser.IntegerLiteral, 0);
};

PrimaryExpressionContext.prototype.Identifier = function() {
    return this.getToken(PlayScriptParser.Identifier, 0);
};

PrimaryExpressionContext.prototype.LPAREN = function() {
    return this.getToken(PlayScriptParser.LPAREN, 0);
};

PrimaryExpressionContext.prototype.RPAREN = function() {
    return this.getToken(PlayScriptParser.RPAREN, 0);
};

PrimaryExpressionContext.prototype.additiveExpression = function() {
    return this.getTypedRuleContext(AdditiveExpressionContext,0);
};

PrimaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterPrimaryExpression(this);
	}
};

PrimaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitPrimaryExpression(this);
	}
};

PrimaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitPrimaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.PrimaryExpressionContext = PrimaryExpressionContext;

PlayScriptParser.prototype.primaryExpression = function() {

    var localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PlayScriptParser.RULE_primaryExpression);
    var _la = 0; // Token type
    try {
        this.state = 35;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.IntegerLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.match(PlayScriptParser.IntegerLiteral);
            break;
        case PlayScriptParser.Identifier:
            this.enterOuterAlt(localctx, 2);
            this.state = 29;
            this.match(PlayScriptParser.Identifier);
            break;
        case PlayScriptParser.LPAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 30;
            this.match(PlayScriptParser.LPAREN);
            this.state = 32;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlayScriptParser.IntegerLiteral || _la===PlayScriptParser.LPAREN || _la===PlayScriptParser.Identifier) {
                this.state = 31;
                this.additiveExpression(0);
            }

            this.state = 34;
            this.match(PlayScriptParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


PlayScriptParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 0:
			return this.additiveExpression_sempred(localctx, predIndex);
	case 1:
			return this.multiplicativeExpression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

PlayScriptParser.prototype.additiveExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

PlayScriptParser.prototype.multiplicativeExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.PlayScriptParser = PlayScriptParser;
