import { UnaryOperator, BinaryOperator } from "./Operator";

const unaryOperators = {
  sqrt: new UnaryOperator("sqrt", Math.sqrt),
};

const binaryOperators = {
  "+": new BinaryOperator("+", (a, b) => a + b, 2),
  "-": new BinaryOperator("-", (a, b) => a - b, 2),
  "*": new BinaryOperator("*", (a, b) => a * b, 1),
  "/": new BinaryOperator("/", (a, b) => a / b, 1),
  "%": new BinaryOperator("%", (a, b) => (a / b) * 100, 1),
};

const operators = { ...unaryOperators, ...binaryOperators };

export { unaryOperators, binaryOperators, operators };
