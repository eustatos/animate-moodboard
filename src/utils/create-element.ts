import { IElement } from '../interfaces';

function createElement(elementConfig: IElement): void {
  const { src, html } = elementConfig;
  if (typeof html === 'undefined' && typeof src === 'undefined') {
    throw new Error('config of element must have `src` or `html` properties.');
  }
  if (typeof src !== 'undefined') {
    const element: HTMLElement = document.createElement('img');
    element.setAttribute('src', src);
    element.style.width = '200px';
    elementConfig.element = element;
  }
}

export default createElement;
