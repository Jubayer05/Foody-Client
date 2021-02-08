import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "./LoginEmail.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';

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
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    const [loginShow, setLoginShow] = useState(false);
    const handleDisplayItem = () => {
          setLoginShow(!loginShow);
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
                <Button onClick={handleSubmit(onSubmit)} className="login-input create-btn" 
                variant="contained" color="primary">Create an account</Button>
                <p className="text-center mt-2">Already have an account? &nbsp;
                <span className="login-link" onClick={handleDisplayItem}>Login</span></p>
            </form> 
            </div>:
            <div className="loginEmail">
                <h4 className="">Login</h4>
            <form>
                <TextField className="login-input" name="email" 
                label="Username or Email" inputRef={register} color="secondary"
                InputLabelProps={{style: { color: '#000' }}} />

                <TextField className="login-input" name="password" 
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
                <Button onClick={handleSubmit(onSubmit)} className="login-input login-btn" 
                variant="contained" color="primary">Login</Button>
                <p className="text-center mt-2">Don't have an account? &nbsp;
                <span className="login-link" onClick={handleDisplayItem} >Create an account</span></p>
            </form>
            </div>}
        </ThemeProvider>
    );
};

export default LoginEmail;