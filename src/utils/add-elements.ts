import { IElement } from '../interfaces';
import { createElement } from './create-element';

function addElements(
  parent: HTMLElement,
  elements: IElement[],
  defaultConfig: IElement,
) {
  elements.forEach(element => {
    createElement(element, defaultConfig);
    if (typeof element.element !== 'undefined') {
      parent.appendChild(element.element);
    }
  });
}

export default addElements;
