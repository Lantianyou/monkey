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