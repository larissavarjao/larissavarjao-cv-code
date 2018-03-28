import * as React from 'react';

import Header from '../../components/Header';

const s = require('./style.scss');

export default class Cover extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={s.cover}>
        <Header />
        <div className={s.background} />
        <div className={s.coverImg}>
          <h1>Larissa Varjão</h1>
          <h2>Front-End Developer</h2>
          <div className={s.buttons}>
            <div className={`${s.button} ${s.buttonGreen}`}>Business</div>
            <div className={`${s.button} ${s.buttonBlack}`}>Developer</div>
          </div>
        </div>
      </div>
    );
  }
}
