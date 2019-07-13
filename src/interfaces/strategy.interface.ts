import { handlerType } from '../types';

interface IStrategy {
  moveHandlers?: handlerType[];
  initHandlers?: handlerType[];
}

export default IStrategy;