import * as React from 'react';

const Gmail = require('../../assets/img/gmail.svg');

const s = require('./style.scss');

interface IProps {
  changeLanguage?: (lang: 'portuguese' | 'english') => void;
}

export default class Header extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.container}>
        <div className={s.contact}>
          <img src={Gmail} />
          <p>larissasilvavarjao@gmail.com</p>
        </div>
      </div>
    );
  }
}
