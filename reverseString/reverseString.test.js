import { expect, test } from '@jest/globals';
import reverseString from './reverseString';

test('reverse "mushroom" to "moorhsum"', () => {
  expect(reverseString("mushroom")).toBe("moorhsum");
});

test('reverse "I play a guitar pretty well" to "llew ytterp ratiug a yalp I"', () => {
  expect(reverseString("I play a guitar pretty well")).toBe("llew ytterp ratiug a yalp I");
});