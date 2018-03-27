import * as React from 'react';

const s = require('./style.scss');

export default class Animation extends React.Component<{}, {}> {
  public render() {
    return <div className={s.container}>{/* <img /> */}</div>;
  }
}
