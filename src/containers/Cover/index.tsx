import * as React from 'react';

import Header from '../../components/Header';
import Abstract from '../../components/Abstract';

const s = require('./style.scss');

export default class Cover extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={s.container}>
        <Header />
        <Abstract />
      </div>
    );
  }
}
