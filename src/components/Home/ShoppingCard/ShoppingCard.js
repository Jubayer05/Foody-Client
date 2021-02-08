import React from 'react';
import ShoppingCardItem from '../ShoppingCardItem/ShoppingCardItem';
import image1 from '../../../image/batter-1239028_1920.jpg';
import image2 from '../../../image/food-932959_1920.jpg';
import image3 from '../../../image/louis-hansel-shotsoflouis-Nwo0eNAYYyA-unsplash.jpg';
import image4 from '../../../image/pizza-1209748_1920.jpg';
import image5 from '../../../image/pizza-1442946_1920.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ShoppingCard = () => {
    const ShoppingCard = [
        {
            id: 1,
            image: image1,
            title: "This the food heading",
            detail: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?"
        },
        {
            id: 2,
            image: image2,
            title: "This the food heading",
            detail: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?"
        },
        {
            id: 3,
            image: image3,
            title: "This the food heading",
            detail: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?"
        },
        {
            id: 4,
            image: image4,
            title: "This the food heading",
            detail: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?"
        },
        {
            id: 5,
            image: image5,
            title: "This the food heading",
            detail: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?"
        },
        {
            id: 6,
            image: image3,
            title: "This the food heading",
            detail: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?"
        }
    ]
    return (
        <div className="container text-center mt-3">
            <h2 className="text-center pt-5 pb-4 font-primary">Order Your <span className="color-primary"> Food</span></h2>
            <div className="row mx-auto">
                {
                    ShoppingCard.map(item => <ShoppingCardItem item={item}/>)
                }         
            </div>
            <Link to="/seeAllItem">
                <button className="btn primary-btn my-3">See More <FontAwesomeIcon className="rightArrow-icon" icon={faArrowRight}/></button>
            </Link>
        </div>
    );
};

export default ShoppingCard;