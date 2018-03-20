import * as React from 'react';
import { observer } from 'mobx-react';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import Cover from '../Cover';

const s = require('./style.scss');

interface IProps {}

const fullPageOptions = {
  scrollSensitivity: 7,
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};

const horizontalSliderProps = {
  name: 'horizontalSlider1', // name is required
  infinite: true // enable infinite scrolling
};

const horizontalSlides = [
  <Slide> Slide 2.1 </Slide>,
  <Slide> Slide 2.2 </Slide>
];
horizontalSliderProps.slides = horizontalSlides;

const slides = [
  <Slide>
    <Cover />
  </Slide>,
  <HorizontalSlider {...horizontalSliderProps} />,
  <Slide> Slide 3 </Slide>
];
fullPageOptions.slides = slides;

@observer
export default class Home extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.container}>
        <Fullpage {...fullPageOptions} />
      </div>
    );
  }
}
