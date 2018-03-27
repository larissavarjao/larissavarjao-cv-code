import * as React from 'react';

import Animation from '../Animation';

const s = require('./style.scss');
const Me = require('../../assets/img/me.png');
const Business = require('../../assets/img/deal.svg');
const Developer = require('../../assets/img/laptop.svg');

export default class Abstract extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={s.container}>
        <Animation />
        <div className={s.abstract}>
          <div className={s.call}>
            <img src={Me} />
            <h1>Larissa Varjão</h1>
            <div className={s.box}>
              <h2>Front-End Developer</h2>
              <h3>Salvador, Brazil</h3>
            </div>
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
