const virtualMachine = function(program) {
	let programCounter = 0;
	let stack = [];
	let stackPointer = 0;
	
	while (programCounter < program.length) {
		let currentInstruction = program[programCounter];
		let left;
		let right;

		switch (currentInstruction) {
			case PUSH:
				stack[stackPointer] = program[programCounter + 1]
				stackPointer++;
				programCounter++;
				break;
			case ADD:
				right = stack[stackPointer - 1];
				stackPointer--
				left = stack[stackPointer - 1]
				stackPointer--

				stack[stackPointer] = left + right
				stackPointer++
				break;
			case MINUS:
				right = stack[stackPointer - 1];
				stackPointer--
				left = stack[stackPointer - 1]
				stackPointer--

				stack[stackPointer] = left - right
				stackPointer++
				break;
		}
		programCounter++;
	}

	console.log("stackTop: ", stack[stackPointer-1])
}

const PUSH = "PUSH"
const ADD = "ADD"
const MINUS = "MINUS"

let program = [
	PUSH,
	3,
	PUSH,
	4,
	ADD,
	PUSH,
	5,
	MINUS
];
	
virtualMachine(program);

function parseProgram() {
	program = newProgramASTNode();

	advanceTokens();

	for (currentToken() != EOF_TOKEN) {
		statement = null

		if (currentToken() == LET_TOKEN) {
			statement = parseLetStatement();
		} else if (currentToken() == RETURN_TOKEN) {
			statement = parseReturnStatement();
		} else if (currentToken() == IF_TOKEN) {
			statement = parseIfStatement();
		}

		if (statement != null) {
			program.Statements.push(statement)
		}

		advanceTokens()
	}

	return program
}


function parseLetStatement() {
	advanceTokens()

	identifier = parseIdentifier()
	
	advanceTokens()
	
	if currentToken() != EQUAL_TOKEN {
		parseError("no equal sign!")
		return null
	}

	advanceTokens()
	
	value = parseExpression()
	
	variableStatement = newVariableStatementASTNode()
	variableStatement.identifier = identifier
	variableStatement.value = value
	return variableStatement
}

function parseIdentifier() {
	identifier = newIdentifierASTNode()
	identifier.token = currentToken()
	return identifier
}

function parseExpression() {
	if (currentToken() == INTEGER_TOKEN) {
		if (nextToken() == PLUS_TOKEN) {
			return parseOperatorExpression()
		} else if (nextToken() == SEMICOLON_TOKEN) {
			return parseIntegerLiteral()
	}
	} else if (currentToken() == LEFT_PAREN) {
		return parseGroupedExpression() }
}