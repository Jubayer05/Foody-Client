import React from 'react';
import image1 from '../../../image/chefs/Chef-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./CartItem.css";

const CartItem = ({item}) => {
    console.log(item.id, item.title);
    return (
        <tr className="table__row">
            <td className="p-2 pb-4">
                <img src={image1} className="table__row--image" alt=""/>
            </td>
            <td className="p-2 pt-4"><h6 className="table__row--heading">{item.title}</h6></td>
            <td className="p-2 pt-4 table__row--price"><FontAwesomeIcon icon={faDollarSign} />{item.price}</td>
            <td className="p-2 pt-4">
                <span className="d-flex justify-content-between align-items-center table__iteration--container">
                <span className="table__iteration--num">{item.id}</span>
                <span>
                    <FontAwesomeIcon className="d-block table-iteration table-iteration-1" icon={faPlus} />
                    <FontAwesomeIcon className="d-block table-iteration" icon={faMinus} />
                </span>
                </span>
            </td>
            <td className="p-2 pt-4 table__row--price"><FontAwesomeIcon icon={faDollarSign} />{item.price * item.id}</td>
            <td className="table__row--icon pt-4">
                <FontAwesomeIcon className="" icon={faTrashAlt} />
            </td>            
        </tr>
    );
};

export default CartItem;