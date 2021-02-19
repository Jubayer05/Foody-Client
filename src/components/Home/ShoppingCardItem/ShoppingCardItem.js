import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FoodyContext } from '../../../App';
import SimpleSnackbar from '../../Utilities/Snackbar/Snackbar';
import "./ShoppingCardItem.css";

const ShoppingCardItem = ({item, handleFoodData}) => {
    // const {Foody, FoodyUser} = useContext(FoodyContext);
    // const [foodCollection, setFoodCollection] = Foody;
    
    
    return (
        <div className="col-md-4 text-center">
            <div className="cards p-3 mt-5">
                <img className="shoppingCard__image mx-auto" src="https://i.ibb.co/0BKwnR8/Chef-1.png" alt=""/><br/>
                <h4 className="pt-2"><Link className="shoppingCard__heading" to={'/foodDetail/'+item.id}>{item.title}</Link></h4>
                <p>{item.detail}</p>
                {/* <SimpleSnackbar item={item}/> */}
                <button className="btn btn-success" onClick={() => handleFoodData(item)}>add to cart</button>
            </div> 
        </div>
    );
};

export default ShoppingCardItem;