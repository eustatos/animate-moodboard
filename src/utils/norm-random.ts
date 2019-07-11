import { returnNumber } from '../types';

class NormRandom {
  public plusMinus: returnNumber;
  public zeroTwo: returnNumber;

  constructor() {
    this.plusMinus = plusMinus;
    this.zeroTwo = zeroTwo;
  }
}

function plusMinus(): number {
  const random = 2 * (Math.random() - 0.5);
  return random;
}

function zeroTwo(): number {
  const random = 2 * Math.random();
  return random;
}
export default NormRandom;
