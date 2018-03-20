import * as React from 'react';

const Gmail = require('../../assets/img/gmail.svg');
const Employee = require('../../assets/img/employee.svg');

const s = require('./style.scss');

export default class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={s.container}>
        <div className={s.name}>
          <img src={Employee} />
          <p>Larissa Varjão</p>
        </div>
        <div className={s.contact}>
          <img src={Gmail} />
          <p>larissasilvavarjao@gmail.com</p>
        </div>
      </div>
    );
  }
}
