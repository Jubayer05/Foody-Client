import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ShoppingCardItem.css";

const ShoppingCardItem = ({item}) => {
    const [style, setStyle] = useState({display: 'none'});
    return (
        <div className="col-md-4 text-center">
            <div className="cards p-3">
                <img className="shoppingCard__image mx-auto" src={item.image} alt=""/><br/>
                <h4 className="pt-2"><Link className="shoppingCard__heading" to={'/foodDetail/'+item.id}>{item.title}</Link></h4>
                <p>{item.detail}</p>
                <button className="btn btn-primary my-1 btn-visible">
                Add to Cart</button>
            </div>
        </div>
    );
};

export default ShoppingCardItem;