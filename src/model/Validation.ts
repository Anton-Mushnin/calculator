import { unaryOperators, binaryOperators } from './Operators';

const unaryArray = [...unaryOperators.keys()];

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const valueStart = [...digits, '(', '.', ...unaryArray];
const afterDigits = [...digits, '.', ')', ...binaryOperators.keys()];

function isLastSymbolValid(expression: string): Boolean {
  const cleanExpression = expression.split(' ').join('');
  if (cleanExpression.length === 1) {
    return valueStart.includes(expression[0]);
  }
  const prevSymbol = cleanExpression.slice(-2, -1);
  const symbol = cleanExpression.slice(-1);
  if (prevSymbol === '.') {
    return digits.includes(symbol);
  }
  if (digits.includes(prevSymbol)) {
    return afterDigits.includes(symbol);
  }
  if (prevSymbol === '(' || unaryArray.includes(prevSymbol)) {
    return valueStart.includes(symbol);
  }
  if ([...binaryOperators.keys()].includes(prevSymbol)) {
    return valueStart.includes(symbol);
  }
  if (prevSymbol === ')') {
    return [...binaryOperators.keys()].includes(symbol);
  }
  return false;
}

//to work on
// function addSpaces(expression: string): string {
//   const cleanExpression = expression.split(' ').join('');
//   const prevSymbol = cleanExpression.slice(-2, -1);
//   const symbol = expression.slice(-1);
//   console.log(symbol);
//   if (prevSymbol === '(' || unaryArray.includes(prevSymbol)) {
//     return expression;
//   }
//   if ([...binaryOperators.keys()].includes(prevSymbol)) {
//     return expression;
//   }
//   if ([...binaryOperators.keys()].includes(symbol)) {
//     return `${expression.slice(0, -1)} ${symbol} `;
//   }
//   return expression;
// }

export { isLastSymbolValid, digits };
