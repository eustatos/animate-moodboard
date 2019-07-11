import { IElement } from '../interfaces';
import createElement from './create-element';

describe('createElement', () => {
  it('should be defined', () => {
    expect(createElement).toBeDefined();
  });
  it('should be type of function', () => {
    expect(typeof createElement).toBe('function');
  });
  describe('valid create element', () => {
    let elementConfig: IElement;
    const validSrc = 'https://example.com/image.jpg';
    beforeEach(() => {
      elementConfig = {
        src: validSrc,
      };
      createElement(elementConfig);
    });
    it('should be create', () => {
      expect(elementConfig.element).toBeDefined();
      expect(elementConfig.element instanceof HTMLElement).toBeTruthy();
    });
    it('correct attr src', () => {
      let src;
      if (typeof elementConfig.element !== 'undefined') {
        src = elementConfig.element.getAttribute('src');
      }
      expect(src).toBe(validSrc);
    });
    it('thow exception if not have requirements param', () => {
      expect(createElement.bind(null, {})).toThrow();
    });
  });
});
