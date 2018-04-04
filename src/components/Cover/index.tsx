import * as React from 'react';

const s = require('./style.scss');
const facebook = require('../../assets/img/svgs/facebook.svg');
const linkedin = require('../../assets/img/svgs/linkedin.svg');
const github = require('../../assets/img/svgs/github.svg');
const me = require('../../assets/img/cover/me.png');

interface IProps {
  subtitle: string;
}

export class Cover extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.cover}>
        <div className={s.background} />
        <div className={s.coverImg}>
          <div className={s.info}>
            <img className={s.me} src={me} />
            <h1>Larissa Varjão</h1>
            <h2>{this.props.subtitle}</h2>
            <div className={s.buttons}>
              <div className={s.button}>
                <a href="https://www.facebook.com/larivarjao" target="_blank">
                  <img src={facebook} />
                </a>
              </div>
              <div className={s.button}>
                <a
                  href="https://www.linkedin.com/in/larissa-varj%C3%A3o-152932b8/"
                  target="_blank"
                >
                  <img src={linkedin} />
                </a>
              </div>
              <div className={s.button}>
                <a href="https://github.com/larissavarjao" target="_blank">
                  <img src={github} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cover;
