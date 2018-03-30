import * as React from 'react';

const s = require('./style.scss');

interface IProps {
  changeLanguage?: (lang: 'portuguese' | 'english') => void;
}

export default class Contact extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.contact}>
        <h2>Get in touch to contact as freelancer</h2>
        <h3>Click bellow to send me a email</h3>
        <div className={s.email}>
          <a href="mailto:larissasilvavarjao@gmail.com">Send</a>
        </div>
      </div>
    );
  }
}
