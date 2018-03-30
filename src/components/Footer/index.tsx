import * as React from 'react';

const s = require('./style.scss');
const facebook = require('../../assets/img/svgs/facebook.svg');
const linkedin = require('../../assets/img/svgs/linkedin.svg');
const github = require('../../assets/img/svgs/github.svg');

interface IProps {
  changeLanguage?: (lang: 'portuguese' | 'english') => void;
}

export default class Footer extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.footer}>
        <div className={s.name}>
          <h1 className={s.me}>Larissa Varjão 2018</h1>
        </div>
        <div className={s.icon}>
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
    );
  }
}
