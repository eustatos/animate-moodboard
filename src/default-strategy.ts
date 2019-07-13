import Bit from './bit';
import IStrategy from './interfaces/strategy.interface';

const defaultStrategy: IStrategy = {
  initHandlers: [
    (bit: Bit, wrapper: HTMLDivElement): void => {
      const { offsetHeight, offsetWidth } = wrapper;
      const initStyle = {
        'box-shadow': '0 3px 3px rgba(0, 0, 0, .2)',
        left:
          Math.random() > 0.5
            ? offsetWidth + 'px'
            : '-' + bit.element.offsetWidth + 'px',
        position: 'absolute',
        top: Math.floor(Math.random() * offsetHeight).toString() + 'px',
      };
      bit.setStyle(initStyle);
    },
  ],
  moveHandlers: [
    (bit: Bit): void => {
      const { width } = bit.config.style;
      const range = parseInt(width.replace(/px/, ''), 10);
      bit.element.style.width =
        getRandomRange(range / 2, range).toString() + 'px';
    },
    (bit: Bit, wrapper: HTMLDivElement): void => {
      const { offsetWidth: wrapperX, offsetHeight: wrapperY } = wrapper;
      const { width: elementWidth } = bit.config.style;
      const deltaX = parseInt(elementWidth.replace(/px/, ''), 10);
      const deltaY =
        (deltaX * bit.element.offsetHeight) / bit.element.offsetWidth;
      let top: number;
      if (deltaY === 0) {
        top = wrapperY * 0.25;
      } else {
        top = getRandomRange(0, wrapperY - deltaY);
      }
      bit.element.style.setProperty(
        'max-height',
        (wrapperY - top).toString() + 'px',
      );
      const left = getRandomRange(0, wrapperX - deltaX);
      bit.element.style.top = top.toString() + 'px';
      bit.element.style.left = left.toString() + 'px';
    },
  ],
};

function getRandomRange(min: number, max: number): number {
  const result = Math.floor(min + Math.random() * (max - min));
  return result;
}
export default defaultStrategy;
