import React, { useContext, useState } from 'react';
import './LoginGoogleFB.css';
import facebook from "../../../image/logos/fb.png";
import google from "../../../image/logos/google.png";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../../../firebase.config';
import { FoodyContext } from '../../../App';
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();
var provider = new firebase.auth.FacebookAuthProvider();

const LoginGoogleFB = () => {
    const {FoodyUser} = useContext(FoodyContext);
    const [userInfo, setUserInfo] = FoodyUser;
    
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // Sign In with Google
    const handleGoogleSingIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            setUserInfo({name: user.displayName, email: user.email});
            history.replace(from);
        }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    // Sign in with Facebook   
    const handleFacebookSingIn = () => {
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            var user = result.user;
            console.log(user);
            setUserInfo({name: user.displayName, email: user.email});
            history.replace(from);
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        })
    }
    return (
        <div>
            <p className="or-line text-center mt-2">or</p>

            <div onClick={handleGoogleSingIn} className="google d-flex justify-content-between align-items-center mt-3">
                <img src={google} className="google-img" alt=""/>
                <span className="icon-font">Google</span>
                <span></span>
            </div>

            <div onClick={handleFacebookSingIn} className="facebook d-flex justify-content-between align-items-center mt-4">
                <img src={facebook} className="facebook-img" alt=""/>
                <span className="icon-font">Facebook</span>
                <span></span>
            </div>
        </div>
    );
};

export default LoginGoogleFB;