import * as React from 'react';

const s = require('./style.scss');

const languages = [
  { name: 'Html', url: './icons/html.png' },
  { name: 'Sass', url: './icons/sass.svg' },
  { name: 'JavaScript', url: './icons/javascript.png' },
  { name: 'TypeScript', url: './icons/typescript.png' },
  { name: 'React', url: './icons/react.png' },
  { name: 'Webpack', url: './icons/webpack.png' },
  { name: 'Git', url: './icons/git.png' }
];

interface IProps {}

export default class Skills extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.skills}>
        <h1 className={s.title}>Skills</h1>
        <div className={s.cards}>
          {languages.map(lang => {
            return (
              <div className={`${s.card}`}>
                <img src={require(`${lang.url}`)} />
                <h1>{lang.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
