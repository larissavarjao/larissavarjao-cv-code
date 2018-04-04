import * as React from 'react';

const s = require('./style.scss');

interface IProps {
  title: string;
  ufba: string;
  unifacs: string;
}

export class Education extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.abstract}>
        <div className={s.left}>
          <h1>{this.props.title}</h1>
          <div className={s.graduate}>
            <h2>Universidade de Salvador (UNIFACS)</h2>
            <p>{this.props.unifacs}</p>
          </div>
          <div className={s.graduate}>
            <h2>Universidade Federal da Bahia (UFBa)</h2>
            <p>{this.props.ufba}</p>
          </div>
        </div>
        <div className={s.image} />
      </div>
    );
  }
}

export default Education;
