import * as React from 'react';

const Gmail = require('../../assets/img/header/gmail.svg');

const s = require('./style.scss');

interface IProps {
  changeLanguage?: (lang: 'portuguese' | 'english') => void;
}

export default class Header extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.header}>
        <div className={s.touch}>
          <h3>Available to freelancer projects!</h3>
        </div>
        <div className={s.contact}>
          <img src={Gmail} />
          <p>larissasilvavarjao@gmail.com</p>
        </div>
      </div>
    );
  }
}
