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

// const brackets = ['(', ')'];
const unaryArray = [...unaryOperators.keys()];
const operators = [
  ...[...binaryOperators.keys()].filter((op) => !unaryArray.includes(op)),
  ...unaryArray,
];

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const valueStart = [...digits, '(', ...unaryArray];
const afterDigits = [...digits, '.', ')', ...binaryOperators.keys()];

function isLastSymbolValid(expression: string): Boolean {
  const cleanExpression = expression.split(' ').join('');
  if (cleanExpression.length === 1) {
    return valueStart.includes(expression[0]);
  }
  const prevSymbol = cleanExpression.slice(-2, -1);
  const symbol = cleanExpression.slice(-1);
  if (digits.includes(prevSymbol)) {
    return afterDigits.includes(symbol);
  }
  if (prevSymbol === '(' || unaryArray.includes(prevSymbol)) {
    return valueStart.includes(symbol);
  }
  if ([...binaryOperators.keys()].includes(prevSymbol)) {
    return valueStart.includes(symbol);
  }
  return true;
}

function addSpaces(expression: string): string {
  const cleanExpression = expression.split(' ').join('');
  const prevSymbol = cleanExpression.slice(-2, -1);
  const symbol = expression.slice(-1);
  console.log(symbol);
  if (prevSymbol === '(' || unaryArray.includes(prevSymbol)) {
    return expression;
  }
  if ([...binaryOperators.keys()].includes(prevSymbol)) {
    return expression;
  }
  if ([...binaryOperators.keys()].includes(symbol)) {
    return `${expression.slice(0, -1)} ${symbol} `;
  }
  return expression;
}

export {
  unaryOperators,
  binaryOperators,
  operators,
  digits,
  valueStart,
  afterDigits,
  isLastSymbolValid,
  addSpaces,
};
