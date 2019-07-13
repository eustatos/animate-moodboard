import Bit from './bit';
import defaultStrategy from './default-strategy';
import { handlerType } from './types';

class Moodboard {
  private _wrapper: HTMLDivElement;
  private _bits: Bit[];
  private _initHandlers: handlerType[];

  constructor(wrapper: HTMLDivElement, bits: Bit[]) {
    this._bits = [];
    this._initHandlers = defaultStrategy.initHandlers;
    this._wrapper = wrapper;
    this._wrapper.style.setProperty('position', 'relative');
    bits.forEach(config => {
      const newBit = new Bit(config);
      this._bits.push(newBit);
    });
  }

  public init() {
    this._bits.forEach((bit: Bit) => {
      this._wrapper.appendChild(bit.element);
      this._initHandlers.forEach(
        ((handler: handlerType) => {
          handler(bit, this._wrapper);
        }).bind(this),
      );
    });
  }
}

export default Moodboard;
