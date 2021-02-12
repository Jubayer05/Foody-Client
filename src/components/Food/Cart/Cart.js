import React, { useContext } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import FoodData from '../../../FakeData/FakeData';
import "./Cart.css";
import CartItem from '../CartItem/CartItem';
import { Button } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { FoodyContext } from '../../../App';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ff4081",
      },
      secondary: {
        main: '#424242',
      },
    }
  });
const Cart = () => {
    const {Foody, FoodyUser} = useContext(FoodyContext);
    const [foodCollection, setFoodCollection] = Foody;
    const prices = [];
    foodCollection.forEach(food => {
        prices.push(food.price); 
    })
    const total = prices.reduce((a, b) => {
        return a + b;
    }, 0);
    const tax = parseFloat((total * 0.08).toFixed(2));

    const handleUpdateCart = () => {
        console.log(total, prices);
    }
    return (
        <ThemeProvider theme={theme}>
        <div className="container pb-5">
            <Navbar/>
            <div className="row">
                <div className="col-md-8">
                    <table className="w-100">
                        <colgroup>
                            <col span="1" style={{"width": "20%"}}/>
                            <col span="1" style={{"width": "35%"}}/>
                            <col span="1" style={{"width": "15%"}}/>
                            <col span="1" style={{"width": "15%"}}/>
                            <col span="1" style={{"width": "15%"}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th colSpan="2" className="text-center">Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        
                            {
                                foodCollection.map(item => <CartItem item={item} />)
                            }
                       
                    </table>
                    <div className="d-flex">
                    <Button onClick={handleUpdateCart} className="mt-4 ml-auto" style={{outline: 'none'}}
                        variant="contained" color="primary">Update Cart</Button>
                    </div>
                </div>
                <div className="col-md-4">
                    <h3>COUPON</h3>
                    <div className="coupon-box">
                        <input className="coupon-input" type="text" placeholder="Coupon Code" />
                        <Button className="w-100 mt-3" style={{outline: 'none'}}
                        variant="contained" color="primary">Apply Coupon</Button>
                    </div>
                    <h3 className="mt-5">Cart Totals</h3>
                    <div className="cart-box">
                        <table className="w-100">
                            <tr className="cart__border">
                                <th>Subtotal</th>
                                <td className="text-right py-3">${total}</td>
                            </tr>
                            <tr className="cart__border">
                                <th>State Tax</th>
                                <td className="text-right py-3">${tax}</td>
                            </tr>
                            <tr className="cart__border">
                                <th>Total</th>
                                <td className="text-right py-3">${total + tax}</td>
                            </tr>
                        </table>
                        <Link to="/shipment" className="cart-link">
                            <Button className="w-100 mt-3" style={{outline: 'none'}}
                            variant="contained" color="primary">Proceed to Checkout</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </ThemeProvider>
    );
};

export default Cart;