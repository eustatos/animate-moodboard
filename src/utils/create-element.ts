import { IElement } from '../interfaces';
import applyAttrs from './apply-attrs';
import applyStyle from './apply-style';
import checkRequirements from './check-requirements';
import mergeConfigs from './merge-configs';


export function createElement(
  elementConfig: IElement,
  defaultConfig?: IElement,
): void {
  const { src, html } = elementConfig;
  checkRequirements(src, html);
  // merge style
  mergeConfigs(elementConfig, defaultConfig);
  if (typeof src !== 'undefined') {
    const element: HTMLElement = document.createElement('img');
    element.setAttribute('src', src);
    elementConfig.element = element;
    applyStyle(elementConfig);
    applyAttrs(elementConfig);
  }

}
