import { expect, test } from 'vitest';
import evaluateExpression from '../Parser';

test('evaluateExpression', () => {
  expect(evaluateExpression('2')).toBe(2);
  expect(evaluateExpression('2 + 2')).toBe(4);
  expect(evaluateExpression('\u221A(2 + 2)')).toBe(2);
  expect(evaluateExpression('-2 + -2')).toBe(-4);
  expect(evaluateExpression('-2 * 4 + 2')).toBe(-6);
  expect(evaluateExpression('(2) + (2)')).toBe(4);
  expect(evaluateExpression('(2 + 2) * -\u221A(2 + 2)')).toBe(-8);
  expect(evaluateExpression('(2 + 2) + 3 * -2 + 2')).toBe(0);
  expect(evaluateExpression('2 * 2 * 2 / 4')).toBe(2);
  expect(evaluateExpression('2 + 2 / 2 * 0')).toBe(2);

  expect(evaluateExpression('-\u221A\u221A16 + 1')).toBe(-1);
  expect(evaluateExpression('(2 + (2 * -3) * 5 + 7)')).toBe(-21);
  expect(evaluateExpression('(2 + (2 * -3) * 5 + 7)')).toBe(-21);
});
