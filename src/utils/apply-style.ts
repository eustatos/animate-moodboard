import { IElement } from '../interfaces';

export default function applyStyle(config: IElement) {
  const { element, style } = config;
  if (typeof style !== 'undefined') {
    Object.keys(style).forEach(cssStyle => {
      if (typeof element === 'undefined') {
        throw new SyntaxError('must have style property');
      }
      element.style.setProperty(cssStyle, style[cssStyle]);
    });
  }
}
