// Generated from Expr.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ExprLexer extends Lexer {
	public static readonly MUL = 1;
	public static readonly DIV = 2;
	public static readonly ADD = 3;
	public static readonly SUB = 4;
	public static readonly LPAREN = 5;
	public static readonly RPAREN = 6;
	public static readonly ID = 7;
	public static readonly INT = 8;
	public static readonly EQ = 9;
	public static readonly SEMI = 10;
	public static readonly COMMENT = 11;
	public static readonly WS = 12;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"MUL", "DIV", "ADD", "SUB", "LPAREN", "RPAREN", "ID", "INT", "EQ", "SEMI", 
		"COMMENT", "WS", "LETTER", "DIGIT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'*'", "'/'", "'+'", "'-'", "'('", "')'", undefined, undefined, 
		"'='", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MUL", "DIV", "ADD", "SUB", "LPAREN", "RPAREN", "ID", "INT", 
		"EQ", "SEMI", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExprLexer._LITERAL_NAMES, ExprLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExprLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ExprLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Expr.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExprLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExprLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ExprLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ExprLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0EX\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x07\b/\n\b\f\b\x0E\b2\v\b\x03\t\x06\t5\n\t\r\t\x0E\t6\x03\n\x03\n\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\fA\n\f\f\f\x0E\fD\v\f\x03\f\x05\f" +
		"G\n\f\x03\f\x05\fJ\n\f\x03\f\x03\f\x03\r\x06\rO\n\r\r\r\x0E\rP\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x02\x02\x02\x10\x03\x02\x03\x05\x02" +
		"\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
		"\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x02\x1D\x02\x02\x03\x02\x06" +
		"\x03\x022;\x04\x02\f\f\x0F\x0F\x05\x02\v\f\x0F\x0F\"\"\x04\x02C\\c|\x02" +
		"\\\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02" +
		"\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02" +
		"\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02" +
		"\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02" +
		"\x03\x1F\x03\x02\x02\x02\x05!\x03\x02\x02\x02\x07#\x03\x02\x02\x02\t%" +
		"\x03\x02\x02\x02\v\'\x03\x02\x02\x02\r)\x03\x02\x02\x02\x0F+\x03\x02\x02" +
		"\x02\x114\x03\x02\x02\x02\x138\x03\x02\x02\x02\x15:\x03\x02\x02\x02\x17" +
		"<\x03\x02\x02\x02\x19N\x03\x02\x02\x02\x1BT\x03\x02\x02\x02\x1DV\x03\x02" +
		"\x02\x02\x1F \x07,\x02\x02 \x04\x03\x02\x02\x02!\"\x071\x02\x02\"\x06" +
		"\x03\x02\x02\x02#$\x07-\x02\x02$\b\x03\x02\x02\x02%&\x07/\x02\x02&\n\x03" +
		"\x02\x02\x02\'(\x07*\x02\x02(\f\x03\x02\x02\x02)*\x07+\x02\x02*\x0E\x03" +
		"\x02\x02\x02+0\x05\x1B\x0E\x02,/\x05\x1B\x0E\x02-/\x05\x1D\x0F\x02.,\x03" +
		"\x02\x02\x02.-\x03\x02\x02\x02/2\x03\x02\x02\x020.\x03\x02\x02\x0201\x03" +
		"\x02\x02\x021\x10\x03\x02\x02\x0220\x03\x02\x02\x0235\t\x02\x02\x0243" +
		"\x03\x02\x02\x0256\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x02" +
		"7\x12\x03\x02\x02\x0289\x07?\x02\x029\x14\x03\x02\x02\x02:;\x07=\x02\x02" +
		";\x16\x03\x02\x02\x02<=\x071\x02\x02=>\x071\x02\x02>B\x03\x02\x02\x02" +
		"?A\n\x03\x02\x02@?\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02\x02" +
		"BC\x03\x02\x02\x02CF\x03\x02\x02\x02DB\x03\x02\x02\x02EG\x07\x0F\x02\x02" +
		"FE\x03\x02\x02\x02FG\x03\x02\x02\x02GI\x03\x02\x02\x02HJ\x07\f\x02\x02" +
		"IH\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\x03\x02\x02\x02KL\b\f\x02\x02L" +
		"\x18\x03\x02\x02\x02MO\t\x04\x02\x02NM\x03\x02\x02\x02OP\x03\x02\x02\x02" +
		"PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\x03\x02\x02\x02RS\b\r\x02\x02S" +
		"\x1A\x03\x02\x02\x02TU\t\x05\x02\x02U\x1C\x03\x02\x02\x02VW\t\x02\x02" +
		"\x02W\x1E\x03\x02\x02\x02\n\x02.06BFIP\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExprLexer.__ATN) {
			ExprLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExprLexer._serializedATN));
		}

		return ExprLexer.__ATN;
	}

}

