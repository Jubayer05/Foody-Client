import React, { useContext, useState } from 'react';
import image1 from '../../../image/chefs/Chef-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./CartItem.css";
import { FoodyContext } from '../../../App';

const CartItem = ({item}) => {
    const [quantity, setQuantity] = useState(1);
    const {Foody, FoodyUser} = useContext(FoodyContext);
    const [foodCollection, setFoodCollection] = Foody;

    const itemData = foodCollection.find(food => food.id === item.id);
    const newItem = {...itemData, quantity: quantity};
    
    const objIdArr = foodCollection.map(food => food.id);
    const foodIndex = objIdArr.indexOf(item.id);
    console.log(foodCollection);
    // foodCollection.map(obj => newItem.find(o => o.id === obj.id) || obj);
    if(foodIndex !== -1) {
        foodCollection[foodIndex] = newItem;
        setFoodCollection(foodCollection);
    }

    const handleDeleteItem = (e) => {
        const trashBtn = document.querySelector(".trashBtn").parentNode.parentNode.parentNode;
        trashBtn.removeChild(document.querySelector(".trashBtn").parentNode.parentNode);
        foodCollection.splice(foodIndex, 1);
    }
    // console.log(foodCollection[foodIndex].quantity === 3);

    const handleIncrease = () => {
        if(quantity < 5) {
            setQuantity(quantity + 1);
        }
    }
    const handleDecrease = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    
    return (
        <tbody>
        <tr className="table__row">
            <td className="p-2 pb-4">
                <img src={image1} className="table__row--image" alt=""/>
            </td>
            <td className="p-2 pt-4"><h6 className="table__row--heading">{item.title}</h6></td>
            <td className="p-2 pt-4 table__row--price"><FontAwesomeIcon icon={faDollarSign} />{item.price}</td>
            <td className="p-2 pt-4">
                <span className="d-flex justify-content-between align-items-center table__iteration--container">
                <span className="table__iteration--num">{quantity}</span>
                <span>
                    <FontAwesomeIcon onClick={handleIncrease} className="d-block table-iteration table-iteration-1" icon={faPlus} />
                    <FontAwesomeIcon onClick={handleDecrease} className="d-block table-iteration" icon={faMinus} />
                </span>
                </span>
            </td>
            <td className="p-2 pt-4 table__row--price">
                <FontAwesomeIcon icon={faDollarSign} />{item.price * quantity}
            </td>
            <td className="table__row--icon pt-4">
                <FontAwesomeIcon onClick={handleDeleteItem} className="trashBtn" icon={faTrashAlt} />
            </td>            
        </tr>
        </tbody>
    );
};

export default CartItem;