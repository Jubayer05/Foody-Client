import React from 'react';
import ShoppingCardItem from '../ShoppingCardItem/ShoppingCardItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ShoppingCard = () => {
    const ShoppingCard = [
        {
            id: 1,
            image: "https://i.ibb.co/0BKwnR8/Chef-1.png",
            price: 50,
            quantity: 1,
            title: "This the food heading 1",
            detail: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?"
        },
        {
            id: 2,
            image: "https://i.ibb.co/0BKwnR8/Chef-1.png",
            price: 50,
            quantity: 2,
            title: "This the food heading 2",
            detail: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?"
        },
        {
            id: 3,
            image: "https://i.ibb.co/0BKwnR8/Chef-1.png",
            price: 15,
            quantity: 1,
            title: "This the food heading 3",
            detail: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?"
        },
        {
            id: 4,
            image: "https://i.ibb.co/0BKwnR8/Chef-1.png",
            price: 25,
            quantity: 1,
            title: "This the food heading 4",
            detail: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?"
        },
        {
            id: 5,
            image: "https://i.ibb.co/0BKwnR8/Chef-1.png",
            price: 35,
            quantity: 1,
            title: "This the food heading 5",
            detail: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?"
        },
        {
            id: 6,
            image: "https://i.ibb.co/0BKwnR8/Chef-1.png",
            price: 45,
            quantity: 1,
            title: "This the food heading 6",
            detail: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?"
        }
    ]
    return (
        <div className="container text-center mt-3">
            <h2 className="text-center pt-5 pb-4 font-primary">Order Your <span className="color-primary"> Food</span></h2>
            <div className="row mx-auto">
                {
                    ShoppingCard.map(item => <ShoppingCardItem item={item} key={item.id}/>)
                }         
            </div>
            <Link to="/seeAllItem">
                <button className="btn primary-btn my-3">See More <FontAwesomeIcon className="rightArrow-icon" icon={faArrowRight}/></button>
            </Link>
        </div>
    );
};

export default ShoppingCard;