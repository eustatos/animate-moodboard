/**
 * @param {string} src
 * src attribute for image
 * @param {string} html
 * html content for element. If present that `src` ignored
 * @param {HTMLElement} 
 * instance for HTMLElement added to parent HTMLElement
 * @param {any} style
 * this styles will apply to element
 * @params {any} attrs
 * this attrs will add to element
 * ```javascript
 * {
 *  src: '/img/example.png'
 *  attrs: {
 *      onclick: 'someFunction()' 
 *  }
 * }
 * ```
 * will be rendered to
 * ```html
 *  <img
 *    src: '/img/example.png'
 *    onclick="someFunction()"
 *  >
 * ```
 */
interface IElement {
    src?: string;
    html?: string;
    element?: HTMLElement;
    callback?: () => void;
    style?: any;
    attrs?: any;
}

export default IElement;