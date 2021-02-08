import React from 'react';
import range from 'lodash/range';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import CarouselCard from '../CarouselCard/CarouselCard';
import image1 from '../../../image/chefs/Chef-1.png';
import image2 from '../../../image/chefs/Chef-2.jpg';
import image3 from '../../../image/chefs/Chef-3.jpg';
import image4 from '../../../image/chefs/Chef-4.jpg';
import image5 from '../../../image/chefs/Chef-5.jpg';
import image6 from '../../../image/chefs/Chef-6.jpg';
import image7 from '../../../image/chefs/Chef-7.jpg';
import image8 from '../../../image/chefs/Chef-8.jpg';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import "./Carousel.css";

const noOfItems = 10;
const noOfCards = 3;
const autoPlayDelay = 2000;
const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1000px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  height: 200px;
  background: #EEE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const carouselItems = range(noOfItems).map(index => (
  <SlideItem key={index}>
    {index+1}
  </SlideItem>
));

const carouselPhoto = [
  {image: image1},
  {image: image2},
  {image: image3},
  {image: image4},
  {image: image5},
  {image: image6},
  {image: image7},
  {image: image8},
]

export default class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <div className="">
        <h2 className="text-center py-2 font-primary">Our Master <span className="color-primary"> Chefs</span></h2>
      <Wrapper className="mt-5">
        <ItemsCarousel
          infiniteLoop
          showSlither
          firstAndLastGutter
          gutter={18}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={<IconButton className="chevron">
                     <ArrowForwardIosIcon fontSize="large" /></IconButton>}
          leftChevron={<IconButton className="chevron">
                     <ArrowBackIosIcon fontSize="large" /></IconButton>}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        >
        {
          carouselPhoto.map(photo => <CarouselCard image={photo}/>)
        }
        </ItemsCarousel>
      </Wrapper>
      </div>
    );
  }
}