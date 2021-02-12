import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FoodyContext } from '../../../App';
import SimpleSnackbar from '../../Utilities/Snackbar/Snackbar';
import "./ShoppingCardItem.css";

const ShoppingCardItem = ({item}) => {
    const {Foody, FoodyUser} = useContext(FoodyContext);
    const [foodCollection, setFoodCollection] = Foody;
    const handleFoodData = () => {
        const newData =  {id: item.id, title: item.title, price: item.price, image: item.image, quantity: item.quantity};
        setFoodCollection([...foodCollection ,newData]);
        // console.log(newData)
    }
    console.log(foodCollection);
    return (
        <div className="col-md-4 text-center">
            <div className="cards p-3 mt-5">
                <img className="shoppingCard__image mx-auto" src="https://i.ibb.co/0BKwnR8/Chef-1.png" alt=""/><br/>
                <h4 className="pt-2"><Link className="shoppingCard__heading" to={'/foodDetail/'+item.id}>{item.title}</Link></h4>
                <p>{item.detail}</p>
                <span onBlur={handleFoodData}><SimpleSnackbar item={item}/></span>
            </div> 
        </div>
    );
};

export default ShoppingCardItem;