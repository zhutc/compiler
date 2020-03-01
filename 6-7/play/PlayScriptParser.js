// Generated from PlayScript.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PlayScriptListener = require('./PlayScriptListener').PlayScriptListener;
var PlayScriptVisitor = require('./PlayScriptVisitor').PlayScriptVisitor;

var grammarFileName = "PlayScript.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003e\u009c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0005\u0004)\n\u0004\u0003\u0005\u0005\u0005,\n\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u00067\n\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0007\bB\n\b\f\b\u000e\bE\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0005\tL\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0007\u000bY\n\u000b\f\u000b\u000e\u000b\\\u000b\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0007\fj\n\f\f\f\u000e\fm\u000b\f\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0005\rt\n\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\r{\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0007\u000e\u0083\n\u000e\f\u000e\u000e\u000e",
    "\u0086\u000b\u000e\u0003\u000f\u0003\u000f\u0005\u000f\u008a\n\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0007\u0010\u0093\n\u0010\f\u0010\u000e\u0010\u0096\u000b",
    "\u0010\u0003\u0011\u0003\u0011\u0005\u0011\u009a\n\u0011\u0003\u0011",
    "\u0002\u0007\u000e\u0014\u0016\u001a\u001e\u0012\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \u0002\u0005",
    "\u0003\u0002-2\u0003\u0002\u0003\u0005\u0004\u0002??Wa\u0002\u009d\u0002",
    "\"\u0003\u0002\u0002\u0002\u0004$\u0003\u0002\u0002\u0002\u0006(\u0003",
    "\u0002\u0002\u0002\b+\u0003\u0002\u0002\u0002\n6\u0003\u0002\u0002\u0002",
    "\f8\u0003\u0002\u0002\u0002\u000e;\u0003\u0002\u0002\u0002\u0010K\u0003",
    "\u0002\u0002\u0002\u0012M\u0003\u0002\u0002\u0002\u0014O\u0003\u0002",
    "\u0002\u0002\u0016]\u0003\u0002\u0002\u0002\u0018z\u0003\u0002\u0002",
    "\u0002\u001a|\u0003\u0002\u0002\u0002\u001c\u0087\u0003\u0002\u0002",
    "\u0002\u001e\u008d\u0003\u0002\u0002\u0002 \u0099\u0003\u0002\u0002",
    "\u0002\"#\t\u0002\u0002\u0002#\u0003\u0003\u0002\u0002\u0002$%\t\u0003",
    "\u0002\u0002%\u0005\u0003\u0002\u0002\u0002&)\u0005\b\u0005\u0002\'",
    ")\u0005\u001c\u000f\u0002(&\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002",
    "\u0002)\u0007\u0003\u0002\u0002\u0002*,\u0005\u000e\b\u0002+*\u0003",
    "\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002",
    "-.\u00079\u0002\u0002.\t\u0003\u0002\u0002\u0002/0\u0005\u0004\u0003",
    "\u000201\u0007b\u0002\u000217\u0003\u0002\u0002\u000223\u0005\u0004",
    "\u0003\u000234\u0007b\u0002\u000245\u0005\f\u0007\u000257\u0003\u0002",
    "\u0002\u00026/\u0003\u0002\u0002\u000262\u0003\u0002\u0002\u00027\u000b",
    "\u0003\u0002\u0002\u000289\u0005\u0012\n\u00029:\u0005\u0010\t\u0002",
    ":\r\u0003\u0002\u0002\u0002;<\b\b\u0001\u0002<=\u0005\u0010\t\u0002",
    "=C\u0003\u0002\u0002\u0002>?\f\u0003\u0002\u0002?@\u0007:\u0002\u0002",
    "@B\u0005\u0010\t\u0002A>\u0003\u0002\u0002\u0002BE\u0003\u0002\u0002",
    "\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002D\u000f\u0003",
    "\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002FL\u0005\u0014\u000b\u0002",
    "GH\u0007b\u0002\u0002HI\u0005\u0012\n\u0002IJ\u0005\u0014\u000b\u0002",
    "JL\u0003\u0002\u0002\u0002KF\u0003\u0002\u0002\u0002KG\u0003\u0002\u0002",
    "\u0002L\u0011\u0003\u0002\u0002\u0002MN\t\u0004\u0002\u0002N\u0013\u0003",
    "\u0002\u0002\u0002OP\b\u000b\u0001\u0002PQ\u0005\u0016\f\u0002QZ\u0003",
    "\u0002\u0002\u0002RS\f\u0004\u0002\u0002ST\u0007O\u0002\u0002TY\u0005",
    "\u0016\f\u0002UV\f\u0003\u0002\u0002VW\u0007P\u0002\u0002WY\u0005\u0016",
    "\f\u0002XR\u0003\u0002\u0002\u0002XU\u0003\u0002\u0002\u0002Y\\\u0003",
    "\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002",
    "[\u0015\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002]^\b\f\u0001",
    "\u0002^_\u0005\u0018\r\u0002_k\u0003\u0002\u0002\u0002`a\f\u0005\u0002",
    "\u0002ab\u0007Q\u0002\u0002bj\u0005\u0018\r\u0002cd\f\u0004\u0002\u0002",
    "de\u0007R\u0002\u0002ej\u0005\u0018\r\u0002fg\f\u0003\u0002\u0002gh",
    "\u0007V\u0002\u0002hj\u0005\u0018\r\u0002i`\u0003\u0002\u0002\u0002",
    "ic\u0003\u0002\u0002\u0002if\u0003\u0002\u0002\u0002jm\u0003\u0002\u0002",
    "\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002l\u0017\u0003",
    "\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002n{\u0007b\u0002\u0002o{",
    "\u0005\u0002\u0002\u0002pq\u0007b\u0002\u0002qs\u00073\u0002\u0002r",
    "t\u0005\u001a\u000e\u0002sr\u0003\u0002\u0002\u0002st\u0003\u0002\u0002",
    "\u0002tu\u0003\u0002\u0002\u0002u{\u00074\u0002\u0002vw\u00073\u0002",
    "\u0002wx\u0005\u000e\b\u0002xy\u00074\u0002\u0002y{\u0003\u0002\u0002",
    "\u0002zn\u0003\u0002\u0002\u0002zo\u0003\u0002\u0002\u0002zp\u0003\u0002",
    "\u0002\u0002zv\u0003\u0002\u0002\u0002{\u0019\u0003\u0002\u0002\u0002",
    "|}\b\u000e\u0001\u0002}~\u0005\u0010\t\u0002~\u0084\u0003\u0002\u0002",
    "\u0002\u007f\u0080\f\u0003\u0002\u0002\u0080\u0081\u0007:\u0002\u0002",
    "\u0081\u0083\u0005\u0010\t\u0002\u0082\u007f\u0003\u0002\u0002\u0002",
    "\u0083\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002",
    "\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u001b\u0003\u0002\u0002\u0002",
    "\u0086\u0084\u0003\u0002\u0002\u0002\u0087\u0089\u00075\u0002\u0002",
    "\u0088\u008a\u0005\u001e\u0010\u0002\u0089\u0088\u0003\u0002\u0002\u0002",
    "\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002",
    "\u008b\u008c\u00076\u0002\u0002\u008c\u001d\u0003\u0002\u0002\u0002",
    "\u008d\u008e\b\u0010\u0001\u0002\u008e\u008f\u0005 \u0011\u0002\u008f",
    "\u0094\u0003\u0002\u0002\u0002\u0090\u0091\f\u0003\u0002\u0002\u0091",
    "\u0093\u0005 \u0011\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0093",
    "\u0096\u0003\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094",
    "\u0095\u0003\u0002\u0002\u0002\u0095\u001f\u0003\u0002\u0002\u0002\u0096",
    "\u0094\u0003\u0002\u0002\u0002\u0097\u009a\u0005\u0006\u0004\u0002\u0098",
    "\u009a\u0005\n\u0006\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099",
    "\u0098\u0003\u0002\u0002\u0002\u009a!\u0003\u0002\u0002\u0002\u0011",
    "(+6CKXZiksz\u0084\u0089\u0094\u0099"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'Number'", "'String'", "'var'", "'boolean'", 
                     "'break'", "'byte'", "'case'", "'catch'", "'char'", 
                     "'class'", "'const'", "'continue'", "'default'", "'do'", 
                     "'double'", "'else'", "'enum'", "'extends'", "'final'", 
                     "'finally'", "'float'", "'for'", "'if'", "'implements'", 
                     "'import'", "'instanceof'", "'int'", "'interface'", 
                     "'long'", "'native'", "'new'", "'package'", "'private'", 
                     "'protected'", "'public'", "'return'", "'short'", "'super'", 
                     "'switch'", "'this'", "'void'", "'while'", null, null, 
                     null, null, null, "'null'", "'('", "')'", "'{'", "'}'", 
                     "'['", "']'", "';'", "','", "'.'", "'...'", "'@'", 
                     "'::'", "'='", "'>'", "'<'", "'!'", "'~'", "'?'", "':'", 
                     "'->'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", 
                     "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", 
                     "'|'", "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", 
                     "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", "'>>>='" ];

var symbolicNames = [ null, null, null, null, "BOOLEAN", "BREAK", "BYTE", 
                      "CASE", "CATCH", "CHAR", "CLASS", "CONST", "CONTINUE", 
                      "DEFAULT", "DO", "DOUBLE", "ELSE", "ENUM", "EXTENDS", 
                      "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "IMPLEMENTS", 
                      "IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", 
                      "NATIVE", "NEW", "PACKAGE", "PRIVATE", "PROTECTED", 
                      "PUBLIC", "RETURN", "SHORT", "SUPER", "SWITCH", "THIS", 
                      "VOID", "WHILE", "IntegerLiteral", "FloatingPointLiteral", 
                      "BooleanLiteral", "CharacterLiteral", "StringLiteral", 
                      "NullLiteral", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                      "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "ELLIPSIS", 
                      "AT", "COLONCOLON", "ASSIGN", "GT", "LT", "BANG", 
                      "TILDE", "QUESTION", "COLON", "ARROW", "EQUAL", "LE", 
                      "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", 
                      "SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", 
                      "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
                      "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", 
                      "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", 
                      "Identifier", "WS", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "literal", "primitiveType", "statement", "expressionStatement", 
                   "declaration", "initializer", "expression", "assignmentExpression", 
                   "assignmentOperator", "additiveExpression", "multiplicativeExpression", 
                   "primaryExpression", "argumentExpressionList", "compoundStatement", 
                   "blockItemList", "blockItem" ];

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
PlayScriptParser.T__0 = 1;
PlayScriptParser.T__1 = 2;
PlayScriptParser.T__2 = 3;
PlayScriptParser.BOOLEAN = 4;
PlayScriptParser.BREAK = 5;
PlayScriptParser.BYTE = 6;
PlayScriptParser.CASE = 7;
PlayScriptParser.CATCH = 8;
PlayScriptParser.CHAR = 9;
PlayScriptParser.CLASS = 10;
PlayScriptParser.CONST = 11;
PlayScriptParser.CONTINUE = 12;
PlayScriptParser.DEFAULT = 13;
PlayScriptParser.DO = 14;
PlayScriptParser.DOUBLE = 15;
PlayScriptParser.ELSE = 16;
PlayScriptParser.ENUM = 17;
PlayScriptParser.EXTENDS = 18;
PlayScriptParser.FINAL = 19;
PlayScriptParser.FINALLY = 20;
PlayScriptParser.FLOAT = 21;
PlayScriptParser.FOR = 22;
PlayScriptParser.IF = 23;
PlayScriptParser.IMPLEMENTS = 24;
PlayScriptParser.IMPORT = 25;
PlayScriptParser.INSTANCEOF = 26;
PlayScriptParser.INT = 27;
PlayScriptParser.INTERFACE = 28;
PlayScriptParser.LONG = 29;
PlayScriptParser.NATIVE = 30;
PlayScriptParser.NEW = 31;
PlayScriptParser.PACKAGE = 32;
PlayScriptParser.PRIVATE = 33;
PlayScriptParser.PROTECTED = 34;
PlayScriptParser.PUBLIC = 35;
PlayScriptParser.RETURN = 36;
PlayScriptParser.SHORT = 37;
PlayScriptParser.SUPER = 38;
PlayScriptParser.SWITCH = 39;
PlayScriptParser.THIS = 40;
PlayScriptParser.VOID = 41;
PlayScriptParser.WHILE = 42;
PlayScriptParser.IntegerLiteral = 43;
PlayScriptParser.FloatingPointLiteral = 44;
PlayScriptParser.BooleanLiteral = 45;
PlayScriptParser.CharacterLiteral = 46;
PlayScriptParser.StringLiteral = 47;
PlayScriptParser.NullLiteral = 48;
PlayScriptParser.LPAREN = 49;
PlayScriptParser.RPAREN = 50;
PlayScriptParser.LBRACE = 51;
PlayScriptParser.RBRACE = 52;
PlayScriptParser.LBRACK = 53;
PlayScriptParser.RBRACK = 54;
PlayScriptParser.SEMI = 55;
PlayScriptParser.COMMA = 56;
PlayScriptParser.DOT = 57;
PlayScriptParser.ELLIPSIS = 58;
PlayScriptParser.AT = 59;
PlayScriptParser.COLONCOLON = 60;
PlayScriptParser.ASSIGN = 61;
PlayScriptParser.GT = 62;
PlayScriptParser.LT = 63;
PlayScriptParser.BANG = 64;
PlayScriptParser.TILDE = 65;
PlayScriptParser.QUESTION = 66;
PlayScriptParser.COLON = 67;
PlayScriptParser.ARROW = 68;
PlayScriptParser.EQUAL = 69;
PlayScriptParser.LE = 70;
PlayScriptParser.GE = 71;
PlayScriptParser.NOTEQUAL = 72;
PlayScriptParser.AND = 73;
PlayScriptParser.OR = 74;
PlayScriptParser.INC = 75;
PlayScriptParser.DEC = 76;
PlayScriptParser.ADD = 77;
PlayScriptParser.SUB = 78;
PlayScriptParser.MUL = 79;
PlayScriptParser.DIV = 80;
PlayScriptParser.BITAND = 81;
PlayScriptParser.BITOR = 82;
PlayScriptParser.CARET = 83;
PlayScriptParser.MOD = 84;
PlayScriptParser.ADD_ASSIGN = 85;
PlayScriptParser.SUB_ASSIGN = 86;
PlayScriptParser.MUL_ASSIGN = 87;
PlayScriptParser.DIV_ASSIGN = 88;
PlayScriptParser.AND_ASSIGN = 89;
PlayScriptParser.OR_ASSIGN = 90;
PlayScriptParser.XOR_ASSIGN = 91;
PlayScriptParser.MOD_ASSIGN = 92;
PlayScriptParser.LSHIFT_ASSIGN = 93;
PlayScriptParser.RSHIFT_ASSIGN = 94;
PlayScriptParser.URSHIFT_ASSIGN = 95;
PlayScriptParser.Identifier = 96;
PlayScriptParser.WS = 97;
PlayScriptParser.COMMENT = 98;
PlayScriptParser.LINE_COMMENT = 99;

PlayScriptParser.RULE_literal = 0;
PlayScriptParser.RULE_primitiveType = 1;
PlayScriptParser.RULE_statement = 2;
PlayScriptParser.RULE_expressionStatement = 3;
PlayScriptParser.RULE_declaration = 4;
PlayScriptParser.RULE_initializer = 5;
PlayScriptParser.RULE_expression = 6;
PlayScriptParser.RULE_assignmentExpression = 7;
PlayScriptParser.RULE_assignmentOperator = 8;
PlayScriptParser.RULE_additiveExpression = 9;
PlayScriptParser.RULE_multiplicativeExpression = 10;
PlayScriptParser.RULE_primaryExpression = 11;
PlayScriptParser.RULE_argumentExpressionList = 12;
PlayScriptParser.RULE_compoundStatement = 13;
PlayScriptParser.RULE_blockItemList = 14;
PlayScriptParser.RULE_blockItem = 15;


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.IntegerLiteral = function() {
    return this.getToken(PlayScriptParser.IntegerLiteral, 0);
};

LiteralContext.prototype.FloatingPointLiteral = function() {
    return this.getToken(PlayScriptParser.FloatingPointLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(PlayScriptParser.BooleanLiteral, 0);
};

LiteralContext.prototype.CharacterLiteral = function() {
    return this.getToken(PlayScriptParser.CharacterLiteral, 0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(PlayScriptParser.StringLiteral, 0);
};

LiteralContext.prototype.NullLiteral = function() {
    return this.getToken(PlayScriptParser.NullLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.LiteralContext = LiteralContext;

PlayScriptParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PlayScriptParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        _la = this._input.LA(1);
        if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (PlayScriptParser.IntegerLiteral - 43)) | (1 << (PlayScriptParser.FloatingPointLiteral - 43)) | (1 << (PlayScriptParser.BooleanLiteral - 43)) | (1 << (PlayScriptParser.CharacterLiteral - 43)) | (1 << (PlayScriptParser.StringLiteral - 43)) | (1 << (PlayScriptParser.NullLiteral - 43)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


function PrimitiveTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_primitiveType;
    return this;
}

PrimitiveTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveTypeContext.prototype.constructor = PrimitiveTypeContext;


PrimitiveTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitPrimitiveType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.PrimitiveTypeContext = PrimitiveTypeContext;

PlayScriptParser.prototype.primitiveType = function() {

    var localctx = new PrimitiveTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PlayScriptParser.RULE_primitiveType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.T__0) | (1 << PlayScriptParser.T__1) | (1 << PlayScriptParser.T__2))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

StatementContext.prototype.compoundStatement = function() {
    return this.getTypedRuleContext(CompoundStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.StatementContext = StatementContext;

PlayScriptParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PlayScriptParser.RULE_statement);
    try {
        this.state = 38;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.IntegerLiteral:
        case PlayScriptParser.FloatingPointLiteral:
        case PlayScriptParser.BooleanLiteral:
        case PlayScriptParser.CharacterLiteral:
        case PlayScriptParser.StringLiteral:
        case PlayScriptParser.NullLiteral:
        case PlayScriptParser.LPAREN:
        case PlayScriptParser.SEMI:
        case PlayScriptParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 36;
            this.expressionStatement();
            break;
        case PlayScriptParser.LBRACE:
            this.enterOuterAlt(localctx, 2);
            this.state = 37;
            this.compoundStatement();
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


function ExpressionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.SEMI = function() {
    return this.getToken(PlayScriptParser.SEMI, 0);
};

ExpressionStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitExpressionStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.ExpressionStatementContext = ExpressionStatementContext;

PlayScriptParser.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, PlayScriptParser.RULE_expressionStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (PlayScriptParser.IntegerLiteral - 43)) | (1 << (PlayScriptParser.FloatingPointLiteral - 43)) | (1 << (PlayScriptParser.BooleanLiteral - 43)) | (1 << (PlayScriptParser.CharacterLiteral - 43)) | (1 << (PlayScriptParser.StringLiteral - 43)) | (1 << (PlayScriptParser.NullLiteral - 43)) | (1 << (PlayScriptParser.LPAREN - 43)))) !== 0) || _la===PlayScriptParser.Identifier) {
            this.state = 40;
            this.expression(0);
        }

        this.state = 43;
        this.match(PlayScriptParser.SEMI);
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


function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.primitiveType = function() {
    return this.getTypedRuleContext(PrimitiveTypeContext,0);
};

DeclarationContext.prototype.Identifier = function() {
    return this.getToken(PlayScriptParser.Identifier, 0);
};

DeclarationContext.prototype.initializer = function() {
    return this.getTypedRuleContext(InitializerContext,0);
};

DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitDeclaration(this);
	}
};

DeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.DeclarationContext = DeclarationContext;

PlayScriptParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, PlayScriptParser.RULE_declaration);
    try {
        this.state = 52;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 45;
            this.primitiveType();
            this.state = 46;
            this.match(PlayScriptParser.Identifier);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 48;
            this.primitiveType();
            this.state = 49;
            this.match(PlayScriptParser.Identifier);
            this.state = 50;
            this.initializer();
            break;

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


function InitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_initializer;
    return this;
}

InitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitializerContext.prototype.constructor = InitializerContext;

InitializerContext.prototype.assignmentOperator = function() {
    return this.getTypedRuleContext(AssignmentOperatorContext,0);
};

InitializerContext.prototype.assignmentExpression = function() {
    return this.getTypedRuleContext(AssignmentExpressionContext,0);
};

InitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterInitializer(this);
	}
};

InitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitInitializer(this);
	}
};

InitializerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitInitializer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.InitializerContext = InitializerContext;

PlayScriptParser.prototype.initializer = function() {

    var localctx = new InitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, PlayScriptParser.RULE_initializer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.assignmentOperator();
        this.state = 55;
        this.assignmentExpression();
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


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.assignmentExpression = function() {
    return this.getTypedRuleContext(AssignmentExpressionContext,0);
};

ExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionContext.prototype.COMMA = function() {
    return this.getToken(PlayScriptParser.COMMA, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PlayScriptParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, PlayScriptParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.assignmentExpression();
        this._ctx.stop = this._input.LT(-1);
        this.state = 65;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                this.state = 60;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 61;
                this.match(PlayScriptParser.COMMA);
                this.state = 62;
                this.assignmentExpression(); 
            }
            this.state = 67;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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


function AssignmentExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_assignmentExpression;
    return this;
}

AssignmentExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentExpressionContext.prototype.constructor = AssignmentExpressionContext;

AssignmentExpressionContext.prototype.additiveExpression = function() {
    return this.getTypedRuleContext(AdditiveExpressionContext,0);
};

AssignmentExpressionContext.prototype.Identifier = function() {
    return this.getToken(PlayScriptParser.Identifier, 0);
};

AssignmentExpressionContext.prototype.assignmentOperator = function() {
    return this.getTypedRuleContext(AssignmentOperatorContext,0);
};

AssignmentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitAssignmentExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.AssignmentExpressionContext = AssignmentExpressionContext;

PlayScriptParser.prototype.assignmentExpression = function() {

    var localctx = new AssignmentExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, PlayScriptParser.RULE_assignmentExpression);
    try {
        this.state = 73;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 68;
            this.additiveExpression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 69;
            this.match(PlayScriptParser.Identifier);
            this.state = 70;
            this.assignmentOperator();
            this.state = 71;
            this.additiveExpression(0);
            break;

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


function AssignmentOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_assignmentOperator;
    return this;
}

AssignmentOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentOperatorContext.prototype.constructor = AssignmentOperatorContext;

AssignmentOperatorContext.prototype.ASSIGN = function() {
    return this.getToken(PlayScriptParser.ASSIGN, 0);
};

AssignmentOperatorContext.prototype.MUL_ASSIGN = function() {
    return this.getToken(PlayScriptParser.MUL_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.DIV_ASSIGN = function() {
    return this.getToken(PlayScriptParser.DIV_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.MOD_ASSIGN = function() {
    return this.getToken(PlayScriptParser.MOD_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.ADD_ASSIGN = function() {
    return this.getToken(PlayScriptParser.ADD_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.SUB_ASSIGN = function() {
    return this.getToken(PlayScriptParser.SUB_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.LSHIFT_ASSIGN = function() {
    return this.getToken(PlayScriptParser.LSHIFT_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.RSHIFT_ASSIGN = function() {
    return this.getToken(PlayScriptParser.RSHIFT_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.URSHIFT_ASSIGN = function() {
    return this.getToken(PlayScriptParser.URSHIFT_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.AND_ASSIGN = function() {
    return this.getToken(PlayScriptParser.AND_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.XOR_ASSIGN = function() {
    return this.getToken(PlayScriptParser.XOR_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.OR_ASSIGN = function() {
    return this.getToken(PlayScriptParser.OR_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterAssignmentOperator(this);
	}
};

AssignmentOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitAssignmentOperator(this);
	}
};

AssignmentOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitAssignmentOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.AssignmentOperatorContext = AssignmentOperatorContext;

PlayScriptParser.prototype.assignmentOperator = function() {

    var localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, PlayScriptParser.RULE_assignmentOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        _la = this._input.LA(1);
        if(!(((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (PlayScriptParser.ASSIGN - 61)) | (1 << (PlayScriptParser.ADD_ASSIGN - 61)) | (1 << (PlayScriptParser.SUB_ASSIGN - 61)) | (1 << (PlayScriptParser.MUL_ASSIGN - 61)) | (1 << (PlayScriptParser.DIV_ASSIGN - 61)) | (1 << (PlayScriptParser.AND_ASSIGN - 61)) | (1 << (PlayScriptParser.OR_ASSIGN - 61)) | (1 << (PlayScriptParser.XOR_ASSIGN - 61)) | (1 << (PlayScriptParser.MOD_ASSIGN - 61)))) !== 0) || ((((_la - 93)) & ~0x1f) == 0 && ((1 << (_la - 93)) & ((1 << (PlayScriptParser.LSHIFT_ASSIGN - 93)) | (1 << (PlayScriptParser.RSHIFT_ASSIGN - 93)) | (1 << (PlayScriptParser.URSHIFT_ASSIGN - 93)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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

AdditiveExpressionContext.prototype.SUB = function() {
    return this.getToken(PlayScriptParser.SUB, 0);
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
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, PlayScriptParser.RULE_additiveExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.multiplicativeExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 88;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 86;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_additiveExpression);
                    this.state = 80;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 81;
                    this.match(PlayScriptParser.ADD);
                    this.state = 82;
                    this.multiplicativeExpression(0);
                    break;

                case 2:
                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_additiveExpression);
                    this.state = 83;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 84;
                    this.match(PlayScriptParser.SUB);
                    this.state = 85;
                    this.multiplicativeExpression(0);
                    break;

                } 
            }
            this.state = 90;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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

MultiplicativeExpressionContext.prototype.DIV = function() {
    return this.getToken(PlayScriptParser.DIV, 0);
};

MultiplicativeExpressionContext.prototype.MOD = function() {
    return this.getToken(PlayScriptParser.MOD, 0);
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
    var _startState = 20;
    this.enterRecursionRule(localctx, 20, PlayScriptParser.RULE_multiplicativeExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.primaryExpression();
        this._ctx.stop = this._input.LT(-1);
        this.state = 105;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 103;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_multiplicativeExpression);
                    this.state = 94;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 95;
                    this.match(PlayScriptParser.MUL);
                    this.state = 96;
                    this.primaryExpression();
                    break;

                case 2:
                    localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_multiplicativeExpression);
                    this.state = 97;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 98;
                    this.match(PlayScriptParser.DIV);
                    this.state = 99;
                    this.primaryExpression();
                    break;

                case 3:
                    localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_multiplicativeExpression);
                    this.state = 100;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 101;
                    this.match(PlayScriptParser.MOD);
                    this.state = 102;
                    this.primaryExpression();
                    break;

                } 
            }
            this.state = 107;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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

PrimaryExpressionContext.prototype.Identifier = function() {
    return this.getToken(PlayScriptParser.Identifier, 0);
};

PrimaryExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

PrimaryExpressionContext.prototype.LPAREN = function() {
    return this.getToken(PlayScriptParser.LPAREN, 0);
};

PrimaryExpressionContext.prototype.RPAREN = function() {
    return this.getToken(PlayScriptParser.RPAREN, 0);
};

PrimaryExpressionContext.prototype.argumentExpressionList = function() {
    return this.getTypedRuleContext(ArgumentExpressionListContext,0);
};

PrimaryExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
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
    this.enterRule(localctx, 22, PlayScriptParser.RULE_primaryExpression);
    var _la = 0; // Token type
    try {
        this.state = 120;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            this.match(PlayScriptParser.Identifier);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.literal();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 110;
            this.match(PlayScriptParser.Identifier);
            this.state = 111;
            this.match(PlayScriptParser.LPAREN);
            this.state = 113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (PlayScriptParser.IntegerLiteral - 43)) | (1 << (PlayScriptParser.FloatingPointLiteral - 43)) | (1 << (PlayScriptParser.BooleanLiteral - 43)) | (1 << (PlayScriptParser.CharacterLiteral - 43)) | (1 << (PlayScriptParser.StringLiteral - 43)) | (1 << (PlayScriptParser.NullLiteral - 43)) | (1 << (PlayScriptParser.LPAREN - 43)))) !== 0) || _la===PlayScriptParser.Identifier) {
                this.state = 112;
                this.argumentExpressionList(0);
            }

            this.state = 115;
            this.match(PlayScriptParser.RPAREN);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 116;
            this.match(PlayScriptParser.LPAREN);
            this.state = 117;
            this.expression(0);
            this.state = 118;
            this.match(PlayScriptParser.RPAREN);
            break;

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


function ArgumentExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_argumentExpressionList;
    return this;
}

ArgumentExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentExpressionListContext.prototype.constructor = ArgumentExpressionListContext;

ArgumentExpressionListContext.prototype.assignmentExpression = function() {
    return this.getTypedRuleContext(AssignmentExpressionContext,0);
};

ArgumentExpressionListContext.prototype.argumentExpressionList = function() {
    return this.getTypedRuleContext(ArgumentExpressionListContext,0);
};

ArgumentExpressionListContext.prototype.COMMA = function() {
    return this.getToken(PlayScriptParser.COMMA, 0);
};

ArgumentExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterArgumentExpressionList(this);
	}
};

ArgumentExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitArgumentExpressionList(this);
	}
};

ArgumentExpressionListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitArgumentExpressionList(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PlayScriptParser.prototype.argumentExpressionList = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ArgumentExpressionListContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, PlayScriptParser.RULE_argumentExpressionList, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.assignmentExpression();
        this._ctx.stop = this._input.LT(-1);
        this.state = 130;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ArgumentExpressionListContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_argumentExpressionList);
                this.state = 125;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 126;
                this.match(PlayScriptParser.COMMA);
                this.state = 127;
                this.assignmentExpression(); 
            }
            this.state = 132;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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


function CompoundStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_compoundStatement;
    return this;
}

CompoundStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompoundStatementContext.prototype.constructor = CompoundStatementContext;

CompoundStatementContext.prototype.LBRACE = function() {
    return this.getToken(PlayScriptParser.LBRACE, 0);
};

CompoundStatementContext.prototype.RBRACE = function() {
    return this.getToken(PlayScriptParser.RBRACE, 0);
};

CompoundStatementContext.prototype.blockItemList = function() {
    return this.getTypedRuleContext(BlockItemListContext,0);
};

CompoundStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterCompoundStatement(this);
	}
};

CompoundStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitCompoundStatement(this);
	}
};

CompoundStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitCompoundStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.CompoundStatementContext = CompoundStatementContext;

PlayScriptParser.prototype.compoundStatement = function() {

    var localctx = new CompoundStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, PlayScriptParser.RULE_compoundStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(PlayScriptParser.LBRACE);
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.T__0) | (1 << PlayScriptParser.T__1) | (1 << PlayScriptParser.T__2))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (PlayScriptParser.IntegerLiteral - 43)) | (1 << (PlayScriptParser.FloatingPointLiteral - 43)) | (1 << (PlayScriptParser.BooleanLiteral - 43)) | (1 << (PlayScriptParser.CharacterLiteral - 43)) | (1 << (PlayScriptParser.StringLiteral - 43)) | (1 << (PlayScriptParser.NullLiteral - 43)) | (1 << (PlayScriptParser.LPAREN - 43)) | (1 << (PlayScriptParser.LBRACE - 43)) | (1 << (PlayScriptParser.SEMI - 43)))) !== 0) || _la===PlayScriptParser.Identifier) {
            this.state = 134;
            this.blockItemList(0);
        }

        this.state = 137;
        this.match(PlayScriptParser.RBRACE);
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


function BlockItemListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_blockItemList;
    return this;
}

BlockItemListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockItemListContext.prototype.constructor = BlockItemListContext;

BlockItemListContext.prototype.blockItem = function() {
    return this.getTypedRuleContext(BlockItemContext,0);
};

BlockItemListContext.prototype.blockItemList = function() {
    return this.getTypedRuleContext(BlockItemListContext,0);
};

BlockItemListContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterBlockItemList(this);
	}
};

BlockItemListContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitBlockItemList(this);
	}
};

BlockItemListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitBlockItemList(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PlayScriptParser.prototype.blockItemList = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BlockItemListContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, PlayScriptParser.RULE_blockItemList, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.blockItem();
        this._ctx.stop = this._input.LT(-1);
        this.state = 146;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new BlockItemListContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_blockItemList);
                this.state = 142;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 143;
                this.blockItem(); 
            }
            this.state = 148;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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


function BlockItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_blockItem;
    return this;
}

BlockItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockItemContext.prototype.constructor = BlockItemContext;

BlockItemContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

BlockItemContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

BlockItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterBlockItem(this);
	}
};

BlockItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitBlockItem(this);
	}
};

BlockItemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlayScriptVisitor ) {
        return visitor.visitBlockItem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlayScriptParser.BlockItemContext = BlockItemContext;

PlayScriptParser.prototype.blockItem = function() {

    var localctx = new BlockItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, PlayScriptParser.RULE_blockItem);
    try {
        this.state = 151;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.IntegerLiteral:
        case PlayScriptParser.FloatingPointLiteral:
        case PlayScriptParser.BooleanLiteral:
        case PlayScriptParser.CharacterLiteral:
        case PlayScriptParser.StringLiteral:
        case PlayScriptParser.NullLiteral:
        case PlayScriptParser.LPAREN:
        case PlayScriptParser.LBRACE:
        case PlayScriptParser.SEMI:
        case PlayScriptParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 149;
            this.statement();
            break;
        case PlayScriptParser.T__0:
        case PlayScriptParser.T__1:
        case PlayScriptParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 150;
            this.declaration();
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
	case 6:
			return this.expression_sempred(localctx, predIndex);
	case 9:
			return this.additiveExpression_sempred(localctx, predIndex);
	case 10:
			return this.multiplicativeExpression_sempred(localctx, predIndex);
	case 12:
			return this.argumentExpressionList_sempred(localctx, predIndex);
	case 14:
			return this.blockItemList_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

PlayScriptParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

PlayScriptParser.prototype.additiveExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		case 2:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

PlayScriptParser.prototype.multiplicativeExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return this.precpred(this._ctx, 3);
		case 4:
			return this.precpred(this._ctx, 2);
		case 5:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

PlayScriptParser.prototype.argumentExpressionList_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

PlayScriptParser.prototype.blockItemList_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.PlayScriptParser = PlayScriptParser;
