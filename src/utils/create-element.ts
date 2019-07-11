import { IElement } from '../interfaces';

export function createElement(
  elementConfig: IElement,
  defaultConfig?: IElement,
): void {
  //
  const { src, html } = elementConfig;
  checkRequirements(src, html);
  // merge style
  mergeConfigs(elementConfig, defaultConfig);
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
  /**
   *
   * @param src
   * @param html
   */
  function checkRequirements(src?: string, html?: string): void {
    if (typeof html === 'undefined' && typeof src === 'undefined') {
      throw new Error(
        'config of element must have `src` or `html` properties.',
      );
    }
  }
  /**
   * 
   * @param elementConfig 
   * @param defaultConfig 
   */
  function mergeConfigs(elementConfig, defaultConfig) {
  if (typeof defaultConfig !== 'undefined') {
    elementConfig.style = { ...defaultConfig.style, ...elementConfig.style };
    elementConfig.attrs = { ...defaultConfig.attrs, ...elementConfig.attrs };
  }
  }
}
