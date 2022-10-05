import { UnaryOperator, BinaryOperator } from "./Operator";

const unaryOperators = new Map([
  ["-", new UnaryOperator("-", (a) => -a)],
  ["\u221A", new UnaryOperator("\u221A", Math.sqrt)],
]);

const binaryOperators = new Map([
  ["+", new BinaryOperator("+", (a, b) => a + b, 2)],
  ["-", new BinaryOperator("-", (a, b) => a - b, 2)],
  ["*", new BinaryOperator("*", (a, b) => a * b, 1)],
  ["/", new BinaryOperator("/", (a, b) => a / b, 1)],
  ["%", new BinaryOperator("%", (a, b) => (a / 100) * b, 1)],
]);

const operators = [...unaryOperators.keys(), ...binaryOperators.keys()];

export { unaryOperators, binaryOperators, operators };
