/**
 *
 * @param src
 * @param html
 */
function checkRequirements(src?: string, html?: string): void {
  if (typeof html === 'undefined' && typeof src === 'undefined') {
    throw new Error('config of element must have `src` or `html` properties.');
  }
}

export default checkRequirements;
