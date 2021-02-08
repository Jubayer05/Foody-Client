import React from 'react';
import "./Footer.css";
import logo from '../../../image/logos/logo-brand.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer pt-5 pb-5 mt-5">
            <div className="container text-center">
                <img className="footer__logo my-4" src={logo} alt=""/>
                <p className="footer__text">At Sushi Bar we serve authentic Japanese cuisine, including Sushi, Udon Noodles, and Donburi. We are known for being a “hidden jewel” of Manhattan also because of our unique and hidden location. Come find us and transport yourself to Tokyo.</p>
                <div className="underLine"></div>

                <div className="footer__content">
                    <div className="row">
                        <div className="footer__content--1 col-md-6 px-4">
                            <p>+ 1-877-967-5362</p>
                            <p>Eighth Avenue 487, New York</p>
                            <p>info@cmsmart.net</p>
                        </div>
                        <div className="footer__content--2 col-md-5 px-2">
                            <p>Subscribe for receiving newsletters</p>
                            <span className="d-flex">
                                <input type="text" placeholder="Your Email" className="footer__content--input mt-2"/>
                                <FontAwesomeIcon className="rightArrow-icon mx-n4 sendIcon" icon={faPaperPlane}/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;