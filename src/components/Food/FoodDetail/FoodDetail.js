import React from 'react';
import { useParams } from 'react-router-dom';
import FoodData from '../../../FakeData/FakeData';
import Navbar from '../../Home/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../../image/chefs/Chef-1.png';
import "./foodDetail.css"


const FoodDetail = () => {
    const data = FoodData;
    const {id} = useParams();
    const newId = parseInt(id);
    const filteredData = data.find(element => element.id ===newId);
    console.log(filteredData);
    return (
        <>
        <Navbar/>
        <div className="foodDetail__container">
            <div className="row mt-5">
            <div className="col-md-7 foodDetail__content">
                <h2>{filteredData.title}</h2>
                <p className="w-75 pt-3 pb-2">{filteredData.detail}</p>
                <div className="d-flex align-items-center">
                <h4 className="color-primary mr-3">${filteredData.price}</h4>
                    <span className="foodDetail__itemNum--container">
                        <span className="foodDetail__iteration">
                            <FontAwesomeIcon className="" icon={faMinus}/>    
                        </span>    
                        <span className="px-3 foodDetail__itemNum">1</span>
                        <span className="foodDetail__iteration">
                            <FontAwesomeIcon className="" icon={faPlus}/>
                        </span>
                    </span>
                </div>
                <button className="foodDetail__btn">Add to cart</button>
                <h1 className="color-primary w-75 mt-3">Here Include Food Carousel</h1>
            </div>
            <div className="col-md-5">
                <img src={image1} className="foodDetail__image" alt=""/>
            </div>  
            </div>            
        </div>
        </>
    );
};

export default FoodDetail;            