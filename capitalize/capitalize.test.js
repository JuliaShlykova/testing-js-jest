import { expect } from '@jest/globals';
import capitalize from './capitalize';

test('capitalizing "apple" equals "Apple"', () => {
  expect(capitalize("apple")).toBe("Apple");
});

test('capitalizing "uNdiNe" equals "UNdiNe"', () => {
  expect(capitalize("uNdiNe")).toBe("UNdiNe");
});

test('capitalizing "dog listens to owner" equals "Dog listens to owner"', () => {
  expect(capitalize("dog listens to owner")).toBe("Dog listens to owner");
});