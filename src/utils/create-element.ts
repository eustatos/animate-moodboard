import { IElement } from '../interfaces';

function createElement(
  elementConfig: IElement,
  defaultConfig?: IElement,
): void {
  //
  const { src, html } = elementConfig;
  // merge style
  if (typeof defaultConfig !== 'undefined') {
    elementConfig.style = { ...defaultConfig.style, ...elementConfig.style };
    elementConfig.attrs = { ...defaultConfig.attrs, ...elementConfig.attrs };
  }
  if (typeof html === 'undefined' && typeof src === 'undefined') {
    throw new Error('config of element must have `src` or `html` properties.');
  }
  if (typeof src !== 'undefined') {
    const element: HTMLElement = document.createElement('img');
    element.setAttribute('src', src);
    if (typeof elementConfig.style !== 'undefined') {
      Object.keys(elementConfig.style).forEach(cssStyle => {
        element.style[cssStyle] = elementConfig.style[cssStyle];
      });
    }
    if (typeof elementConfig.attrs !== 'undefined') {
      Object.keys(elementConfig.attrs).forEach(attrKey => {
        element.setAttribute(attrKey, elementConfig.attrs[attrKey]);
      });
    }
    elementConfig.element = element;
  }
}

export default createElement;
