import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FoodyContext } from '../../../App';
import { useForm } from "react-hook-form";
import "./Shipment.css";
import ShipmentReviewItem from '../ShipmentReviewItem/ShipmentReviewItem';

const Shipment = () => {
    const {Foody, FoodyUser} = useContext(FoodyContext);
    const [foodCollection, setFoodCollection] = Foody;
    const [userData, setUserData] = FoodyUser;
    const { register, handleSubmit, errors } = useForm();
    const [dataBackend, setDataBackend] = useState({});
    const prices = [];
    foodCollection.forEach(food => {
        prices.push(food.price); 
    });
    const total = prices.reduce((a, b) => {
        return a + b;
    }, 0);
    const tax = parseFloat((total * 0.08).toFixed(2));
    const onSubmit = data => {
        setDataBackend({orderFood: foodCollection, ...userData, ...data })
    }

    const handleSubmitData = () => {
        fetch("http://localhost:5000/addOrder", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataBackend)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((error) => console.log(error));
    }
    console.log(dataBackend) 

    return (
        <div className="container pb-5">
            <div className="w-100 row d-flex justify-content-between">
                <div className="delivery__content mt-5 pt-5 col-md-5">
                    <h4 className="delivery__details">Your Delivery Details</h4>
                    <input ref={register} type="text" className="w-100 shipment-input" defaultValue={userData.name}
                    name="name" placeholder="Your Name"/>

                    <input ref={register} type="text" className="w-100 shipment-input" 
                    name="deliveryTo" defaultValue="Delivery to Door" placeholder="Pick Up From"/>
                    
                    <input ref={register} type="text" className="w-100 shipment-input" 
                    name="contact" placeholder="Contact Info"/>
                    
                    <input ref={register} type="text" className="w-100 shipment-input" 
                    name="address" placeholder="Road No or Address"/>

                    <input ref={register} type="text" className="w-100 shipment-input" 
                    name="instruction" placeholder="Add Delivery Instructor"/>
                        
                    <Button onClick={handleSubmit(onSubmit)} className="mt-4 ml-auto w-100" style={{outline: 'none'}}
                    variant="contained" color="primary">Save & Continue</Button>
                </div>
                <div className="col-md-5 d-flex justify-content-end">
                <div className="delivery__review">
                    <p className="mt-5">From <span className="text-bold">Bonani Plaza Restaurant GRP </span></p>
                    <p className="mt-n3">Arriving in <span className="text-bold">20-30</span> Minutes</p>
                    <p className="mt-n3">120 Road No 8</p>

                      
                    {
                        foodCollection.map(item => <ShipmentReviewItem item={item} />)
                    }            

                    <div className="cart-box">
                        <table className="w-100">
                            <tr className="cart__border">
                                <th>Subtotal * 4 items</th>
                                <td className="text-right py-3">${total}</td>
                            </tr>
                            <tr className="cart__border">
                                <th>State Tax</th>
                                <td className="text-right py-3">${tax}</td>
                            </tr>
                            <tr className="cart__border">
                                <th>Delivery Fee</th>
                                <td className="text-right py-3">0</td>
                            </tr>
                            <tr className="cart__border">
                                <th>Total</th>
                                <td className="text-right py-3">${total + tax}</td>
                            </tr>
                        </table>
                        <Link to="/shipment" className="cart-link">
                            <Button onClick={handleSubmitData} className="w-100 mt-3" style={{outline: 'none'}}
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