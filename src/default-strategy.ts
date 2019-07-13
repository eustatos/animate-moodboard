import Bit from './bit';
import { IInitHandlers, IMoveHandlers } from './interfaces/';

const defaultStrategy: IInitHandlers = {
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
};

export default defaultStrategy;
