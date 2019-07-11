/**
 * @param {string} src
 * src attribute for image
 * @param {string} html
 * html content for element. If present that `src` ignored
 * @param {HTMLElement} 
 * instance for HTMLElement added to parent HTMLElement
 */
interface IElement {
    src?: string;
    html?: string;
    element?: HTMLElement;
    callback?: () => void;
}

export default IElement;