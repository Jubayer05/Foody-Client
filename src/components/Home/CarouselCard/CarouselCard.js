import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import "./CarouselCard.css";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
const CarouselCard = ({image}) => {
    const classes = useStyles();

    return (
        <Card className={`${classes.root} carousel-card mb-5`}>
            <CardActionArea>
                <img className="carousel-card--image" src={image.image} alt=""/>
            </CardActionArea>
        </Card>
    );
};

export default CarouselCard;