package lexer

import (
	"testing"

	"tianyou.net/monkey/token"
)

func TestNextToken(t *testing.T) {
	input := "=+(){},;let five = 5;let ten = 10;let add = fn(x, y) {x + y;};let result = add(five, ten);"

	tests := []struct {
		expectedType    token.TokenType
		expectedLiteral string
	}{
		{token.ASSIGN, "="},
		{token.PLUS, "+"},
		{token.LPAREN, "("},
		{token.RPAREN, ")"},
		{token.LBRACE, "{"},
		{token.RBRACE, "}"},
		{token.COMMA, ","},
		{token.SEMICOLON, ";"},
		{token.EOF, ""},
	}

	l := New(input)

	for i, tt := range tests {
		tok := l.NextToken()

		if tok.Type != tt.expectedType {
			t.Fatalf("types wrong")
		}
		if tok.Literal != tt.expectedLiteral {
			t.Fatalf("literal wrong")
		}
	}
}
