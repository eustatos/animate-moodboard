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
    elementConfig.element = element;
    applyStyle(elementConfig);
    applyAttrs(elementConfig);
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
  function mergeConfigs(elementConfig, defaultConfig) {
    if (typeof defaultConfig !== 'undefined') {
      elementConfig.style = { ...defaultConfig.style, ...elementConfig.style };
      elementConfig.attrs = { ...defaultConfig.attrs, ...elementConfig.attrs };
    }
  }

  function applyStyle(config: IElement) {
    const { element, style } = config;
    if (typeof style !== 'undefined') {
      Object.keys(style).forEach(cssStyle => {
        if (typeof element === 'undefined') {
          throw new SyntaxError('must have style property')
        }
        element.style[cssStyle] = style[cssStyle];
      });
    }
  }
  function applyAttrs(config: IElement) {
    const { element, attrs } = config;
    if (typeof attrs !== 'undefined') {
      Object.keys(attrs).forEach(attrKey => {
        if (typeof element === 'undefined') {
          throw new SyntaxError('must have element properties');
        } else {
          element.setAttribute(attrKey, attrs[attrKey]);
        }
      });
    }
  }
}
