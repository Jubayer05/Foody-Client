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
    console.log(userInfo)
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
            var credential = error.credential;
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

            // The signed-in user info.
            var user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;

            console.log(user, accessToken)
            history.replace(from);
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

           console.log(email, errorMessage);
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