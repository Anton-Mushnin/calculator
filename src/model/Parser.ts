import { operators, unaryOperators, binaryOperators } from './Operators';
const parentheses = ['(', ')'];
const symbols = [...parentheses, ...operators];

function isDigit(c: string): boolean {
  return (c >= '0' && c <= '9') || c === '.';
}

function expressionToArray(expression: string): string[] {
  const result: string[] = [];
  for (let i = 0; i < expression.length; i++) {
    const c = expression[i];
    if (c === ' ') {
      continue;
    }
    if (symbols.indexOf(c) > -1) {
      result.push(c);
    } else if (isDigit(c)) {
      let n = '';
      do {
        n += expression[i];
        i += 1;
      } while (isDigit(expression[i]));
      i -= 1;
      result.push(n);
    } else {
      throw new Error(`invalid symbol at ${i + 1}: ${c}`);
    }
  }
  return result;
}

function indexOfClosingParenthes(expression: string[]): number {
  let i = 1;
  let count = 1;
  while (i < expression.length) {
    if (expression[i] === '(') {
      count += 1;
    }
    if (expression[i] === ')') {
      count -= 1;
    }
    if (count === 0) {
      return i;
    }
    i += 1;
  }
  throw new Error('Illegal parenthes');
}

function getValue(expression: string[]): [number, number] {
  if (expression[0] === '(') {
    const closingParenthes = indexOfClosingParenthes(expression);
    return [calc(expression.slice(1, closingParenthes)), closingParenthes + 1];
  }
  if (unaryOperators.has(expression[0])) {
    const [value, next] = getValue(expression.slice(1));
    return [unaryOperators.get(expression[0])!.evaluate(value), next + 1];
  }
  return [parseFloat(expression[0]), 1];
}

function calcRest(val1: number, expression: string[]): number {
  if (expression.length < 1) {
    return val1;
  }
  const operator = binaryOperators.get(expression[0])!;
  const [val2, next] = getValue(expression.slice(1));
  if (next + 1 < expression.length) {
    const nextOperator = binaryOperators.get(expression[next + 1])!;
    if (nextOperator.priority < operator.priority) {
      return operator.evaluate(val1, calc(expression.slice(1)));
    }
    return calcRest(operator.evaluate(val1, val2!), expression.slice(next + 1));
  }

  return operator.evaluate(val1, val2!);
}

function calc(expression: string[]): number {
  if (expression.length === 1) {
    return parseFloat(expression[0]);
  }
  const [val1, next] = getValue(expression.slice(0));
  if (val1 !== undefined) {
    return calcRest(val1!, expression.slice(next));
  } else {
    throw new Error("can't parse value");
  }
}

function evaluateExpression(expression: string): number {
  let result: number;
  try {
    result = calc(expressionToArray(expression));
  } catch {
    result = NaN;
  }
  return result;
}

export default evaluateExpression;
