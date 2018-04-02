import * as React from 'react';
import { observer } from 'mobx-react';
import { match } from 'react-router';
import ScrollUpButton from 'react-scroll-up-button';

import Cover from '../../components/Cover';
import Header from '../../components/Header';
import Education from '../../components/Education';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const s = require('./style.scss');

interface IProps {
  match: match<{ language: string }>;
}

@observer
export default class Home extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.container}>
        <Header />
        <Cover />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <ScrollUpButton TransitionBtnPosition={500} />
      </div>
    );
  }
}
