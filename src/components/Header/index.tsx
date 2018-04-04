import * as React from 'react';
import { Link } from 'react-router-dom';

const Gmail = require('../../assets/img/header/gmail.svg');

const s = require('./style.scss');
const brazil = require('../../assets/img/languages/brazil.svg');
const england = require('../../assets/img/languages/united-kingdom.svg');

interface IProps {
  title: string;
}

export class Header extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.header}>
        <div className={s.touch}>
          <h3>{this.props.title}</h3>
        </div>
        <div className={s.icons}>
          <Link to="/pt">
            <img src={brazil} />
          </Link>
          <Link to="/en">
            <img src={england} />
          </Link>
        </div>
        <div className={s.contact}>
          <img src={Gmail} />
          <p>larissasilvavarjao@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Header;
