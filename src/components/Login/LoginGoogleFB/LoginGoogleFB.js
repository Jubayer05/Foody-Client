import React from 'react';
import './LoginGoogleFB.css';
import facebook from "../../../image/logos/fb.png";
import google from "../../../image/logos/google.png";

const LoginGoogleFB = () => {
    return (
        <div>
            <p className="or-line text-center mt-2">or</p>

            <div className="facebook d-flex justify-content-between align-items-center mt-4">
                <img src={facebook} className="facebook-img" alt=""/>
                <span className="icon-font">Facebook</span>
                <span></span>
            </div>

            <div className="google d-flex justify-content-between align-items-center mt-3">
                <img src={google} className="google-img" alt=""/>
                <span className="icon-font">Facebook</span>
                <span></span>
            </div>
        </div>
    );
};

export default LoginGoogleFB;