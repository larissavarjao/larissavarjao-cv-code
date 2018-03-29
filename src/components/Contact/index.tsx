import * as React from 'react';

const s = require('./style.scss');

interface IProps {
  changeLanguage?: (lang: 'portuguese' | 'english') => void;
}

export default class Contact extends React.Component<IProps, {}> {
  public render() {
    return <div className={s.container}>Contact</div>;
  }
}
