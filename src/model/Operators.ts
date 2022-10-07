import { UnaryOperator, BinaryOperator } from './Operator';

const unaryOperators: Map<string, UnaryOperator> = new Map([
  ['-', new UnaryOperator('-', (a) => -a)],
  ['\u221A', new UnaryOperator('\u221A', Math.sqrt)],
]);

const binaryOperators: Map<string, BinaryOperator> = new Map([
  ['+', new BinaryOperator('+', (a, b) => a + b, 2)],
  ['-', new BinaryOperator('\uFF0D', (a, b) => a - b, 2)],
  ['*', new BinaryOperator('\uFF0A', (a, b) => a * b, 1)],
  ['/', new BinaryOperator('/', (a, b) => a / b, 1)],
  ['%', new BinaryOperator('%', (a, b) => (a / 100) * b, 1)],
]);

const unaryArray = [...unaryOperators.keys()];
const operators = [
  ...[...binaryOperators.keys()].filter((op) => !unaryArray.includes(op)),
  ...unaryArray,
];

export { unaryOperators, binaryOperators, operators };
