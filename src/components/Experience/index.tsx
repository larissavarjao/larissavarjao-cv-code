import * as React from 'react';

const s = require('./style.scss');

interface IProps {
  title: string;
  companys: { name: string; text: string; url: string }[];
}

export class Experience extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.experience}>
        <h1 className={s.title}>{this.props.title}</h1>
        <div className={s.info}>
          <div className={s.companies}>
            {this.props.companys.map(comp => {
              return (
                <div className={s.item}>
                  <img src={comp.url} />
                  <div className={s.info}>
                    <h1>{comp.name}</h1>
                    <p>{comp.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
