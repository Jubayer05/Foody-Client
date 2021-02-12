import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import "../../Food/FoodDetail/foodDetail.css";
import "./Snackbar.css";
import { Link } from 'react-router-dom';
import { createMuiTheme, IconButton, makeStyles, ThemeProvider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { FoodyContext } from '../../../App';

function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}
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
const SimpleSnackbar = ({item}) => {
  const {Foody, FoodyUser} = useContext(FoodyContext);
  const [foodCollection, setFoodCollection] = Foody;
  const handleFoodData = () => {
      // const newData =  {id: item.id, title: item.title, price: item.price, image: item.image, quantity: item.quantity};
      // setFoodCollection([...foodCollection ,newData]);
      console.log(foodCollection)
  }
    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(undefined);
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    
      const { vertical, horizontal } = state;

    const handleClick = (Transition, newState) => () => {
        setTransition(() => Transition);
        setOpen(true);
        setState({ open: true, ...newState });
      };

    const handleClose = () => {
    setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
             <button className="foodDetail__btn"
             onClick={handleClick(TransitionDown, 
             { vertical: 'top', horizontal: 'right' })}>Add To Cart</button>
             <Snackbar onClick={handleFoodData}
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                action={
                    <React.Fragment>
                      <Link to="/cart">
                      <Button variant="contained" color="primary">
                        View Cart
                      </Button>
                      </Link>
                      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                }
                
                key={transition ? transition.name : ''}
            />
        </ThemeProvider>
    );
};

export default SimpleSnackbar;