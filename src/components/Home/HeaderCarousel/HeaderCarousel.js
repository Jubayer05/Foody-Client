import React from 'react';
import Carousel from 'react-material-ui-carousel'
import image1 from '../../../image/batter-1239028_1920.jpg';
import image2 from '../../../image/food-932959_1920.jpg';
import image3 from '../../../image/louis-hansel-shotsoflouis-Nwo0eNAYYyA-unsplash.jpg';
import image4 from '../../../image/pizza-1209748_1920.jpg';
import "./HeaderCarousel.css";
import Header from '../Header/Header';

const HeaderCarousel = () => {
    const items = [
        {image: image1},
        {image: image2},
        {image: image3},
    ];

    return (
        <Carousel className="header__carousel--item" stopAutoPlayOnHover={false}
        indicators={false} interval={4000} navButtonsAlwaysInvisible
        timeout={50}>
            {
                items.map( (item, i) => <Header key={i} item={item} /> )
            }
        </Carousel>
    )
}
export default HeaderCarousel;