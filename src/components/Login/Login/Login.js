import React from 'react';
import LoginEmail from '../LoginEmail/LoginEmail';
import LoginGoogleFB from '../LoginGoogleFB/LoginGoogleFB';
import logo from '../../../image/logos/logo-brand.png';



const Login = () => {
    

    return (
        <div className="container pb-5">
            <div className="text-center">
                <img className="logo__main" src={logo} alt="" />
            </div>
            <LoginEmail/>
            <LoginGoogleFB/>
        </div>
    );
};

export default Login;