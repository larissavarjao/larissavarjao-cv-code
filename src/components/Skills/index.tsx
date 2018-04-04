import * as React from 'react';

const s = require('./style.scss');

const html = require('../../assets/img/skills/imghtml.png');
const sass = require('../../assets/img/skills/sass.svg');
const js = require('../../assets/img/skills/javascript.png');
const ts = require('../../assets/img/skills/typescript.png');
const react = require('../../assets/img/skills/react.png');
const webpack = require('../../assets/img/skills/webpack.png');
const git = require('../../assets/img/skills/git.png');

const languages = [
  { name: 'Html', url: html },
  { name: 'Sass', url: sass },
  { name: 'JavaScript', url: js },
  { name: 'TypeScript', url: ts },
  { name: 'React', url: react },
  { name: 'Webpack', url: webpack },
  { name: 'Git', url: git }
];

interface IProps {
  title: string;
}

export class Skills extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.skills}>
        <h1 className={s.title}>{this.props.title}</h1>
        <div className={s.cards}>
          {languages.map(lang => {
            return (
              <div className={`${s.card}`}>
                <img src={lang.url} />
                <h1>{lang.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Skills;
