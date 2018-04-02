import * as React from 'react';

const s = require('./style.scss');
const calculadora = require('../../assets/img/projects/calculadora-de-churrasco.png');
const mulheres = require('../../assets/img/projects/mulheres-também-fazem-amor.png');

interface IProps {}

export default class Projects extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.projects}>
        <div className={s.texts}>
          <h1 className={s.title}>Projects realized</h1>
          <p>
            Projects carried out outside my work in Cubos for learning and
            practice of the tools that I use. This site was also built on React.
            All are available on GitHub.
          </p>
        </div>
        <div className={s.images}>
          <a href="https://calculadoradechurrasco.github.io/" target="blank">
            <img src={calculadora} />
          </a>
          <a
            href="https://larissavarjao.github.io/mulherestambemfazemamor/"
            target="blank"
          >
            <img src={mulheres} />
          </a>
        </div>
      </div>
    );
  }
}
