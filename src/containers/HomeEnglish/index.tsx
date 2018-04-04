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

const cubos = require('../../assets/img/experience/logo_cubos.svg');
const brisa = require('../../assets/img/experience/logo_brisa.png');
const pwc = require('../../assets/img/experience/logo_pwc.svg');

const companys = [
  {
    name: 'Cubos',
    text:
      'Responsible for developing web applications using React.JS, TypeScript and Webpack. We use Scrum for managing product development and Gitlab for manage the CI process. I have being part of Cubos since november 2017.',
    url: cubos
  },
  {
    name: 'Brisa',
    text:
      "I worked on software testing with the company's main customer, LG, from March 2017 to November 2017.",
    url: brisa
  },
  {
    name: 'PwC',
    text:
      'During the period from July 2015 to March 2017 I worked as an assistant in the auditing part of PwC, one of four biggest companies of the market.',
    url: pwc
  }
];

const s = require('./style.scss');

interface IProps {
  match: match<{ language: string }>;
}

@observer
export default class HomeEnglish extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.container}>
        <Header title="Available to freelancer projects!" />
        <Cover subtitle="Front-End Developer" />
        <Projects
          title="Latest projects working on"
          descriptionCalculator=" It's a site for calculating meats, chicken and garlic buns for a barbecue, soda and drinks for an event and pizzas. Based on the amount of people and children that will attend the event. This projects was also builded in Rect and it's available on Github."
          descritionMTFA="Mulheres Também Fazem Amor (Women Also Make Love) is a movement that promotes actions to transform the mentality, creating ways to promote gender equality, sexual freedom and the protection of women. Project conceived by Carolina Costa, with development of the site realized by Larissa Varjão."
        />
        <Skills title="Skills" />
        <Experience title="Work Experience" companys={companys} />
        <Education
          title="Education"
          ufba="Graduated in Business Administration"
          unifacs="Currently studying Information System"
        />
        <Contact
          h2="Get in touch to contact as freelancer"
          h3="Click bellow to send me a email"
          button="Send"
        />
        <Footer />
        <ScrollUpButton TransitionBtnPosition={500} style={{ bottom: 85 }} />
      </div>
    );
  }
}
