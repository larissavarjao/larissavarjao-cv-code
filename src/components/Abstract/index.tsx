import * as React from 'react';

const s = require('./style.scss');
const Me = require('../../assets/img/me.png');
const Business = require('../../assets/img/deal.svg');
const Developer = require('../../assets/img/laptop.svg');

export default class Abstract extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={s.container}>
        <div className={s.abstract}>
          <div className={s.call}>
            <img src={Me} />
            <h1>Front-End Developer</h1>
            <h2>Salvador, Brazil</h2>
          </div>
          <div className={s.menu}>
            <div className={s.li}>
              <img src={Developer} />
              <h2>CV Developer</h2>
            </div>
            <div className={s.li}>
              <img src={Business} />
              <h2>CV Business</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
