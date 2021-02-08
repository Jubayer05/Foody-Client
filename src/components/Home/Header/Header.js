import React from 'react';
import "./Header.css";
import { Paper } from '@material-ui/core';
import { motion } from 'framer-motion';

const Header = (props) => {
    return (
        <Paper className="header__carousel--paper header"  style={{backgroundImage: `url(${props.item.image})`}}>
            <div className="overlay">
                <div className="w-50 m-auto ">
                    <motion.h1 initial={{scale: 1.8, translateY: 250}}
                    animate={{ scale: 1.2, translateY: 250 }} transition={{ duration: 0.5, delay: 0.1}}
                    className="text-center header__heading">Enjoy Your Food <br/> at 
                     <span className="color-primary"> Foody</span></motion.h1>
                </div>
            </div>
        </Paper>
    );
};

export default Header;