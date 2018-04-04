import * as React from 'react';

const s = require('./style.scss');

interface IProps {
  h2: string;
  h3: string;
  button: string;
}

export class Contact extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.contact}>
        <h2>{this.props.h2}</h2>
        <h3>{this.props.h3}</h3>
        <div className={s.email}>
          <a href="mailto:larissasilvavarjao@gmail.com">{this.props.button}</a>
        </div>
      </div>
    );
  }
}

export default Contact;
