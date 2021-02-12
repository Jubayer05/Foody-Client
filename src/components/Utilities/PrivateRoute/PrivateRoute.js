import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { FoodyContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const {FoodyUser} = useContext(FoodyContext);
    const [userInfo, setUserInfo] = FoodyUser;

    return (
        <Route
            {...rest}
            render={({location}) => 
            userInfo.email ? (children)
            : (<Redirect to={{
                pathname: "/login",
                state: {from: location}
            }}/>)
        }
        />
    );
};

export default PrivateRoute;