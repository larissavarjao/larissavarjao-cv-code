import * as React from 'react';
import { observer } from 'mobx-react';
import Cover from '../Cover';

const s = require('./style.scss');

interface IProps {}

@observer
export default class Home extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.container}>
        <Cover />
      </div>
    );
  }
}
