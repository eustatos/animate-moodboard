import addElements from './add-elements';

describe('addElemnts', () => {
    it('should be defined', () => {
        expect(addElements).toBeDefined();
    }) 
    it('add element', () => {
        const parent = document.createElement('div');
        const elements = [
            {
                src: 'http://google.com'
            },
            {
                src: 'http://yahoo.com'
            }
        ];
        const defaultConfig = {
            style: {
                width: '200px'
            }
        }
        addElements(parent, elements, defaultConfig);

        expect(parent.getElementsByTagName('img').length).toBe(2);
        expect(parent.getElementsByTagName('img')[0].style.width).toBe('200px');
    })
})