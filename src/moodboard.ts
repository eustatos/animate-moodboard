import Bit from './bit';
import defaultStrategy from './default-strategy';
import { IBit } from './interfaces';
import IStrategy from './interfaces/strategy.interface';
import { handlerType } from './types';

class Moodboard {
  private _wrapper: HTMLDivElement;
  private _bits: Bit[];
  private _initHandlers?: handlerType[];
  private _moveHandlers?: handlerType[];
  private _motion!: number;
  private _interval: number;

  constructor(
    wrapper: HTMLDivElement,
    bits: IBit[],
    interval: number = 3000,
    strategy: IStrategy = defaultStrategy,
  ) {
    this._bits = [];
    if (typeof strategy.initHandlers !== 'undefined') {
      this._initHandlers = strategy.initHandlers;
    }
    if (typeof strategy.moveHandlers !== 'undefined') {
      this._moveHandlers = strategy.moveHandlers;
    }
    this._interval = interval;
    this._wrapper = wrapper;
    this._wrapper.style.setProperty('position', 'relative');
    bits.forEach((config: IBit) => {
      const mergedConfig: IBit = Object.assign(config, { interval });
      const newBit = new Bit(mergedConfig);
      this._bits.push(newBit);
    });
  }

  public init() {
    const { _wrapper, _initHandlers } = this;
    this._bits.forEach((bit: Bit) => {
      this._wrapper.appendChild(bit.element);
      this._applyHandlers(bit, _wrapper, _initHandlers);
    });
  }

  public move() {
    const { _applyHandlers, _bits, _wrapper, _moveHandlers, _interval } = this;
    _bits.forEach((bit: Bit) => {
      _applyHandlers(bit, _wrapper, _moveHandlers);
    });
    this._motion = window.setInterval(() => {
      _bits.forEach((bit: Bit) => {
        _applyHandlers(bit, _wrapper, _moveHandlers);
      });
    }, _interval);
  }

  public stop() {
    clearInterval(this._motion);
  }

  private _applyHandlers(
    bit: Bit,
    wrapper: HTMLDivElement,
    handlers?: handlerType[],
  ) {
    if (typeof handlers !== 'undefined') {
      handlers.forEach(
        ((handler: handlerType) => {
          handler(bit, wrapper);
        }).bind(this),
      );
    }
  }
}

export default Moodboard;
