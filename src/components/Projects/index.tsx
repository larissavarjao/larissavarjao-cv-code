import * as React from 'react';

const s = require('./style.scss');
const calculadora = require('../../assets/img/projects/calculadora-de-churrasco.jpg');
const mulheres = require('../../assets/img/projects/mtfa.jpg');

interface IProps {
  title: string;
  descriptionCalculator: string;
  descritionMTFA: string;
}

export class Projects extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.projects}>
        <h1 className={s.title}>{this.props.title}</h1>
        <div className={s.images}>
          <div className={s.project}>
            <a href="https://calculadoradechurrasco.github.io/" target="blank">
              <img src={calculadora} />
            </a>
            <p>{this.props.descriptionCalculator}</p>
          </div>
          <div className={s.project}>
            <a
              href="https://larissavarjao.github.io/mulherestambemfazemamor/"
              target="blank"
            >
              <img src={mulheres} />
            </a>
            <p>{this.props.descritionMTFA}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
