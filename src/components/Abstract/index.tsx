import * as React from 'react';

const s = require('./style.scss');

interface IProps {}

export default class Abstract extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.abstract}>
        <div className={s.left}>
          <h1>Education</h1>
          <div className={s.graduate}>
            <h2>Universidade de Salvador (UNIFACS)</h2>
            <p>Currently studying Information System</p>
          </div>
          <div className={s.graduate}>
            <h2>Universidade Federal da Bahia (UFBa)</h2>
            <p>Graduated in Business Administration</p>
          </div>
        </div>
        <div className={s.image} />
      </div>
    );
  }
}
