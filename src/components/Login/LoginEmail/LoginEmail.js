import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import "./LoginEmail.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { FoodyContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useHistory, useLocation } from 'react-router-dom';

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

const LoginEmail = () => {
    const {FoodyUser} = useContext(FoodyContext);
    const [userInfo, setUserInfo] = FoodyUser;
    const { register, handleSubmit, watch, errors } = useForm();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loginShow, setLoginShow] = useState(false);
    const handleDisplayItem = () => {
          setLoginShow(!loginShow);
    }
    const handleCreateUser = (data) => {
      console.log(userInfo)
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          var user = userCredential.user;
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }

    const handleLoginUser = (data) => {
      firebase.auth().signInWithEmailAndPassword(data.loginEmail, data.loginPassword)
      .then((userCredential) => {
        var user = userCredential.user;
        setUserInfo({email: user.email, name: user.displayName})
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    }

    return (
        <ThemeProvider theme={theme}>
        
            {loginShow ? <div className="loginEmail">
            <h4 className="">Create a new account</h4>
            <form>
                <TextField className="login-input"
                name="firstName" label="First Name" color="secondary"
                inputRef={register} InputLabelProps={{style: { color: '#000' }}} />

                <TextField className="login-input" name="lastName" 
                label="Last Name" inputRef={register} color="secondary"
                InputLabelProps={{style: { color: '#000' }}} />

                <TextField className="login-input" name="email" 
                label="Username or Email" inputRef={register} color="secondary"
                InputLabelProps={{style: { color: '#000' }}} />

                <TextField className="login-input" name="password" 
                label="Password" color="secondary"
                inputRef={register}
                InputLabelProps={{style: { color: '#000' }}} />

                <TextField className="login-input" name="confirmPassword" 
                label="Confirm Password" inputRef={register} color="secondary"
                InputLabelProps={{style: { color: '#000' }}} />

                {/* {errors.firstName && <span>This field is required</span>}
                {errors.lastName && <span>This field is required</span>}
                {errors.email && <span>This field is required</span>}
                {errors.password && <span>This field is required</span>}
                {errors.confirmPassword && <span>This field is required</span>} */}
                <Button onClick={handleSubmit(handleCreateUser)} id="createUser" className="login-input create-btn" 
                variant="contained" color="primary">Create an account</Button>
                <p className="text-center mt-2">Already have an account? &nbsp;
                <span className="login-link" onClick={handleDisplayItem}>Login</span></p>
            </form> 
            </div>:
            <div className="loginEmail">
                <h4 className="">Login</h4>
            <form>
                <TextField className="login-input" name="loginEmail" 
                label="Username or Email" inputRef={register} color="secondary"
                InputLabelProps={{style: { color: '#000' }}} />

                <TextField className="login-input" name="loginPassword" 
                label="Password" color="secondary" inputRef={register}
                InputLabelProps={{style: { color: '#000' }}} />

                <p className="d-flex justify-content-around align-items-center">
                  <FormControlLabel className="mt-2"
                    control={
                      <Checkbox
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Remember Me"
                  />
                  <span className="login-link">Forgotten Password</span>
                </p>
                {/* {errors.firstName && <span>This field is required</span>}
                {errors.lastName && <span>This field is required</span>}
                {errors.email && <span>This field is required</span>}
                {errors.password && <span>This field is required</span>}
                {errors.confirmPassword && <span>This field is required</span>} */}
                <Button onClick={handleSubmit(handleLoginUser)} className="login-input login-btn" 
                variant="contained" color="primary">Login</Button>
                <p className="text-center mt-2">Don't have an account? &nbsp;
                <span className="login-link" onClick={handleDisplayItem} >Create an account</span></p>
            </form>
            </div>}
        </ThemeProvider>
    );
};

export default LoginEmail;