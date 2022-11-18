// test('true is true', () => {
//   expect(true).toBe(true);
// });

import { jest } from '@jest/globals';
import Calc from './calc.js';

describe('Class - Calc', () => {
  let calc;

  beforeEach(() => {
    // Arrange
    calc = new Calc();
  });

  describe('Method - add', () => {
    it('should add 1 and 1 and return 2', () => {
      // Act
      const result = calc.add(1, 1);

      // Assert
      expect(result).toBe(2);
    });

    it('should add 2 and 2 and return 4', () => {
      // Act
      const result = calc.add(2, 2);

      // Assert
      expect(result).toBe(4);
    });
  });
});
