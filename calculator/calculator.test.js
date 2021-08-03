import { expect, test } from '@jest/globals';
import calculator from './calculator';

test('23 adds to 30 is equal to 53', () => {
  expect(calculator.add(23,30)).toBe(53);
});

test('23 minus 30 equals to -7', () => {
  expect(calculator.subtract(23,30)).toBe(-7);
});

test('66 divides by 3 equals to 22', () => {
  expect(calculator.divide(66,3)).toBe(22);
});

test('66 multiplies by 3 equals to 198', () => {
  expect(calculator.multiply(66,3)).toBe(198);
});