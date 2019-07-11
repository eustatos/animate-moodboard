import IElement from './element.interface';

interface IConfig {
  elements: IElement[];
  parent: HTMLElement;
  defaultConfig?: IElement;
}

export default IConfig;
