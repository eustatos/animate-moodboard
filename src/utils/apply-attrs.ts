import { IElement } from "../interfaces";

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
export default applyAttrs;
