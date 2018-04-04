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

const cubos = require('../../assets/img/experience/logo_cubos.svg');
const brisa = require('../../assets/img/experience/logo_brisa.png');
const pwc = require('../../assets/img/experience/logo_pwc.svg');

const companys = [
  {
    name: 'Cubos',
    text:
      'Responsável por desenvolvimento de aplicações web usando React.JS, Typescript e Webpack. Desenvolvemo usando Scrum  Responsible for developing web applications using React.JS, TypeScript and Webpack. Usando Scrum para gerenciamento de produto e Gitlab para gerenciamento de CI, faço parte da Cubos desde novembro de 2017.',
    url: cubos
  },
  {
    name: 'Brisa',
    text:
      'Trabalhei na empresa de teste de software que possui como principal cliente a LG, desde março de 2017 à novembro de 2017.',
    url: brisa
  },
  {
    name: 'PwC',
    text:
      'Durante o período de Julho de 2015 à Março de 2017 trabalhei como assistente no ramo de auditoria na PwC, uma das quatro principais empresas de contabilidade do mundo.',
    url: pwc
  }
];

interface IProps {
  match: match<{ language: string }>;
}

@observer
export default class HomePortuguese extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.container}>
        <Header title="Disponível para projetos como freelancer" />
        <Cover subtitle="Desenvolvedora Front-End" />
        <Projects
          title="Projetos recentes"
          descriptionCalculator="É um site para calculo de carnes, frango e pães de alho para um churrasco, refrigerante e bebidas para um evento e pizzas. Baseado na quantidade de pessoas e crianças que irão para o evento. Esse projeto também está disponível em React no Github."
          descritionMTFA="Mulheres Também Fazem Amor é um movimento que promove ações de transformação da mentalidade , criando formas de promover a igualdade de gênero, a liberdade sexual e a proteção das mulheres. Projeto idealizado por Carolina Costa, com desenvolvimento do site realizado por Larissa Varjão."
        />
        <Skills title="Ferramentas" />
        <Experience title="Experiências" companys={companys} />
        <Education
          title="Formação"
          ufba="Graduada em Administração"
          unifacs="Estudante Sistemas de Informação"
        />
        <Contact
          h2="Entre em contato para projetos"
          h3="Clique abaixo para enviar um e-mail"
          button="Enviar"
        />
        <Footer />
        <ScrollUpButton TransitionBtnPosition={500} />
      </div>
    );
  }
}
