import { expect } from '@jest/globals';
import caesar from './caesar';

test('"attacK aT dawn, bring everyone! Zeus blesses Us!" is encrypted as "fyyfhP fY ifbs, gwnsl jajwdtsj! Ejzx gqjxxjx Zx!"', () => {
  expect(caesar("attacK aT dawn, bring everyone! Zeus blesses Us!")).toBe("fyyfhP fY ifbs, gwnsl jajwdtsj! Ejzx gqjxxjx Zx!");
});