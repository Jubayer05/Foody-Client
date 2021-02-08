import React from 'react';
import "./Service.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faBiking, faHotel, faGlassCheers } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    const serviceData = [
        {
            title: "AMBIENCE",
            detail: "The Bistro has a warm, friendly set up, in very peaceful surroundings.",
            icon: faUtensils
        },
        {
            title: "DELIVERY 24/7",
            detail: "With the Bistro Café, we are open 7 days a week for you.",
            icon: faBiking
        },
        {
            title: "FRESH INGREDIENTS",
            detail: "Premium food and coffee made with the freshest ingredients",
            icon: faHotel
        },
        {
            title: "PROFESSIONAL BARTENDER",
            detail: "We strive to offer nothing but the best in customer service.",
            icon: faGlassCheers
        }
    ];
    return (
        <div className="my-3 mt-5 pt-5">
            <h2 className="text-center pb-2 font-primary">About Our<span className="color-primary"> Service</span></h2>
        <div className="service py-5 my-4">
            <div className="container row mx-auto">
                {
                    serviceData.map(item => <ServiceItem item={item} />)
                }         
            </div>
        </div>
        </div>
    );
};

export default Services;

const ServiceItem = ({item}) => {
    return (
        <div className="col-md-3 text-center">
            <div className="py-5">
            <FontAwesomeIcon className="service__icon " icon={item.icon} />
                <h4 className="mt-4 mb-2">{item.title}</h4>
                <p className="">{item.detail}</p>
            </div>
        </div>
    )
}