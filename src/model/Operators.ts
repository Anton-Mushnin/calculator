import { UnaryOperator, BinaryOperator } from './Operator';

const unaryOperators: Map<string, UnaryOperator> = new Map([
  ['-', new UnaryOperator('-', (a) => -a)],
  ['\u221A', new UnaryOperator('\u221A', Math.sqrt)],
]);

const binaryOperators: Map<string, BinaryOperator> = new Map([
  ['+', new BinaryOperator('+', (a, b) => a + b, 2)],
  ['-', new BinaryOperator('-', (a, b) => a - b, 2)],
  ['*', new BinaryOperator('*', (a, b) => a * b, 1)],
  ['/', new BinaryOperator('/', (a, b) => a / b, 1)],
  ['%', new BinaryOperator('%', (a, b) => (a / 100) * b, 1)],
]);

const arr1 = [...unaryOperators.keys()];
const operators = [
  ...[...binaryOperators.keys()].filter((op) => !arr1.includes(op)),
  ...arr1,
  '(',
  ')',
];

export { unaryOperators, binaryOperators, operators };
