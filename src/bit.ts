import { IBit } from './interfaces';

class Bit {
  public element: HTMLElement;
  public config: IBit;

  constructor(config: IBit) {
    this.config = config;
    const { element, style, attrs, interval } = config;
    if (typeof element !== 'undefined') {
      this.element = element;
    } else {
      this.element = document.createElement('img');
    }
    if (typeof interval !== 'undefined') {
      style['transition-duration'] = `${interval / 1000}s`;
      style['transition-timing-function'] = 'ease-in';
    }
    this.setAttrs(attrs);
    this.setStyle(style);
  }

  public setStyle(style: any) {
    Object.keys(style).forEach(styleKey => {
      try {
        this.element.style.setProperty(styleKey, style[styleKey]);
      } catch (err) {
        // @TODO: make error handler
      }
    });
  }

  public setAttrs(attrs: any) {
    Object.keys(attrs).forEach((attrKey: string) => {
      try {
        this.element.setAttribute(attrKey, attrs[attrKey]);
      } catch (err) {
        // @TODO: make error handler
      }
    });
  }
}

export default Bit;
