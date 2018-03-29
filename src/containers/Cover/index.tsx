import * as React from 'react';

const s = require('./style.scss');

interface IProps {
  language?: string;
}

export default class Cover extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.cover}>
        <div className={s.background} />
        <div className={s.coverImg}>
          <div className={s.info}>
            <h1>Larissa Varjão</h1>
            <h2>Front-End Developer</h2>
            <div className={s.buttons}>
              <div className={`${s.button} ${s.buttonGreen}`}>
                Icones contatos
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
