import { observable, action } from 'mobx';

export class LanguageStore {
  @observable public language: string = 'english';
  @observable public completed: boolean = false;

  @action
  public changeLanguage = (type: string) => {
    this.language = type;
  };
}
