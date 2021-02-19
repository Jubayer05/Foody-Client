import React from 'react';
import image1 from '../../../image/chefs/Chef-1.png';

const ShipmentReviewItem = ({item}) => {
    return (
        <div className="delivery__review--item">
                        <table>
                            <colgroup>
                                <col span="1" style={{"width": "25%"}}/>
                                <col span="1" style={{"width": "50%"}}/>
                                <col span="1" style={{"width": "25%"}}/>
                            </colgroup>
                            <td>
                                <img className="delivery__review--img mr-2" src={image1} alt=""/>
                            </td>
                            <td>
                                <p className="delivery__review--title text-bold">{item.title}</p>
                                <p className="delivery__review--title2 delivery-small-font">Free Delivery</p>
                            </td>
                            <td className="text-right">
                                <h6 className="text-bold pt-1">${item.price} * 1</h6>
                                <h6 className="text-bold pt-1">${item.price * 1}</h6>
                            </td>
                        </table>
                    </div>
    );
};

export default ShipmentReviewItem;