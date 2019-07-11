import { IElement } from '../interfaces';

function mergeConfigs(elementConfig: IElement, defaultConfig?: IElement) {
  if (typeof defaultConfig !== 'undefined') {
    elementConfig.style = { ...defaultConfig.style, ...elementConfig.style };
    elementConfig.attrs = { ...defaultConfig.attrs, ...elementConfig.attrs };
  }
}

export default mergeConfigs;
