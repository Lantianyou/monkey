package code

type Instructions []byte

type Opcode byte

const (
	OpConstant Opcode = iota
)

type Definition struct {
	Name string
	OperandWidths []int
}

var definitions = map[Opcode]*Definition {
	OpConstant: {"OpConstant", []int{2}}
}

func Lookup(op byte) (*Definition, error) {
	def, ok := definitions[op]
	if !ok {
		return nil, fmt.Errorf("opcode %d undefined", op``)
	}
	return def, nil
}