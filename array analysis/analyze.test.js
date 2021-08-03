import { expect } from '@jest/globals';
import analyze from './analyze';

test('[1,2,3,4,5,6,7] has average 4, min - 1, max - 7, length - 7', () => {
  expect(analyze([1,2,3,4,5,6,7])).toEqual({
    average: 4,
    min: 1,
    max: 7,
    length:7
  });
});