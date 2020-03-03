grammar SelfPlayScript;
import CommonLexer;

// @header { package play; }

// 表达式
primary: literal | IDENTIFIER | '(' expression? ')';

// 字面量
literal:
	integerLiteral
	| STRING_LITERAL // 字符串
	| BOOL_LITERAL; // bool

// 整形字面量
integerLiteral: DECIMAL_LITERAL;

// 基础表达式,也靠前优先级越高
expression:
	primary
	| expression bop = ('*' | '|' | '%') expression //乘法
	| expression bop = ('+' | '-') expression // 加法
	| expression bop = ('<=' | '>=' | '<' | '>' | '==' | '!=') expression // 比较
	| expression bop = '&&' expression // 逻辑运算符
	| expression bop = '||' expression // 逻辑运算符
	| expression bop = '?' expression ':' expression // 三目运算符
	| <assoc = right> expression bop = (
		'='
		| '+='
		| '-='
		| '*='
		| '/='
		| '%='
	) expression;


