import * as React from 'react';

const s = require('./style.scss');
const calculadora = require('../../assets/img/projects/calculadora-de-churrasco.jpg');
const mulheres = require('../../assets/img/projects/mulheres-também-fazem-amor.jpg');

interface IProps {}

export default class Projects extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.projects}>
        <h1 className={s.title}>Latest projects working on</h1>
        <div className={s.images}>
          <div className={s.project}>
            <a href="https://calculadoradechurrasco.github.io/" target="blank">
              <img src={calculadora} />
            </a>
            <p>
              It's a site for calculating meats, chicken and garlic buns for a
              barbecue, soda and drinks for an event and pizzas. Based on the
              amount of people and children that will attend the event. This
              projects was also builded in Rect and it's available on Github.
            </p>
          </div>
          <div className={s.project}>
            <a
              href="https://larissavarjao.github.io/mulherestambemfazemamor/"
              target="blank"
            >
              <img src={mulheres} />
            </a>
            <p>
              Mulheres Também Fazem Amor (Women Also Make Love) is a movement
              that promotes actions to transform the mentality, creating ways to
              promote gender equality, sexual freedom and the protection of
              women. Project conceived by Carolina Costa, with development of
              the site realized by Larissa Varjão.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
