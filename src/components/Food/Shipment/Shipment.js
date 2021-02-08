import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../image/chefs/Chef-1.png';
import "./Shipment.css";

const Shipment = () => {
    return (
        <div className="container pb-5">
            <div className="w-100 row d-flex justify-content-between">
                <div className="delivery__content mt-5 pt-5 col-md-5">
                    <h4 className="delivery__details">Your Delivery Details</h4>
                    <input type="text" className="w-100 shipment-input" 
                    defaultValue="Delivery to Door" placeholder="Pick Up From"/>
                    
                    <input type="text" className="w-100 shipment-input" 
                    defaultValue="120 Road No 8" placeholder="Road No or Address"/>

                    <input type="text" className="w-100 shipment-input" 
                    placeholder="Flat, Suite or Floor"/>

                    <input type="text" className="w-100 shipment-input" 
                    placeholder="Business Name"/>

                    <input type="text" className="w-100 shipment-input" 
                    placeholder="Add Delivery Instructor"/>
                        
                    <Button className="mt-4 ml-auto w-100" style={{outline: 'none'}}
                    variant="contained" color="primary">Save & Continue</Button>
                </div>
                <div className="col-md-5 d-flex justify-content-end">
                <div className="delivery__review">
                    <p className="mt-5">From <span className="text-bold">Bonani Plaza Restaurant GRP </span></p>
                    <p className="mt-n3">Arriving in <span className="text-bold">20-30</span> Minutes</p>
                    <p className="mt-n3">120 Road No 8</p>

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
                                <p className="delivery__review--title text-bold">Domimo Pizza</p>
                                <p className="delivery__review--title2 delivery-small-font">Free Delivery</p>
                            </td>
                            <td className="text-right">
                                <h6 className="text-bold pt-1">$40 * 2</h6>
                                <h6 className="text-bold pt-1">$80</h6>
                            </td>
                        </table>
                    </div>              

                    <div className="cart-box">
                        <table className="w-100">
                            <tr className="cart__border">
                                <th>Subtotal * 4 items</th>
                                <td className="text-right py-3">$100</td>
                            </tr>
                            <tr className="cart__border">
                                <th>State Tax</th>
                                <td className="text-right py-3">$20</td>
                            </tr>
                            <tr className="cart__border">
                                <th>Delivery Fee</th>
                                <td className="text-right py-3">0</td>
                            </tr>
                            <tr className="cart__border">
                                <th>Total</th>
                                <td className="text-right py-3">$120</td>
                            </tr>
                        </table>
                        <Link to="/shipment" className="cart-link">
                            <Button className="w-100 mt-3" style={{outline: 'none'}}
                            variant="contained" color="primary">Place Order</Button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipment;