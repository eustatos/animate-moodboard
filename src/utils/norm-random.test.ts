import NormRandom from './norm-random';

describe('normRandom', () => {
  it('should be defined', () => {
    expect(NormRandom).toBeDefined();
  });

  function createMockMath(value: number): void {
    const mockMath = Object.create(global.Math);
    mockMath.random = jest.fn();
    mockMath.random.mockReturnValueOnce(value);
    global.Math = mockMath;
  }
  const normRandom = new NormRandom();

  describe('plusMinus return valid number', () => {
    it('return positive number', () => {
      createMockMath(0.6);
      expect(normRandom.plusMinus()).toBeGreaterThan(0);
    });
    it('return negative number', () => {
      createMockMath(0.1);
      expect(normRandom.plusMinus()).toBeLessThan(0);
    });
    it('return negative number', () => {
      createMockMath(0);
      expect(normRandom.plusMinus()).toBeLessThan(0);
    });
    it('return negative number', () => {
      createMockMath(0.5);
      expect(normRandom.plusMinus() <= 0).toBeTruthy();
    });
    it('return 1', () => {
      createMockMath(1);
      expect(normRandom.plusMinus()).toBe(1);
    });
  });
  describe('zeroTwo return valid number', () => {
    it('return greter than 1', () => {
      createMockMath(0.6);
      expect(normRandom.zeroTwo()).toBeGreaterThan(1);
    });
    it('return 0', () => {
      createMockMath(0);
      expect(normRandom.zeroTwo()).toBe(0);
    });
    it('return 2', () => {
      createMockMath(1);
      expect(normRandom.zeroTwo()).toBe(2);
    });
    it('return negative number', () => {
      createMockMath(0.5);
      expect(normRandom.plusMinus() <= 0).toBeTruthy();
    });
    it('return 1', () => {
      createMockMath(1);
      expect(normRandom.plusMinus()).toBe(1);
    });
  });
});
