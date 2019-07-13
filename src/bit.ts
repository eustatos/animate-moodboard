class Bit {
  public element: HTMLElement;

  constructor(config) {
    const { element, style, attrs } = config;
    if (typeof element !== "undefined") {
      this.element = element;
    } else {
      this.element = document.createElement("img");
    }
    this.setAttrs(attrs);
    this.setStyle(style);
  }

  public setStyle(style) {
    Object.keys(style).forEach(styleKey => {
      try {
        this.element.style.setProperty(styleKey, style[styleKey]);
      } catch (err) {
        console.error(err);
      }
    });
  }

  public setAttrs(attrs) {
    Object.keys(attrs).forEach(attrKey => {
      try {
        this.element[attrKey] = attrs[attrKey];
      } catch (err) {
        //
      }
    });
  }
}

export default Bit;
