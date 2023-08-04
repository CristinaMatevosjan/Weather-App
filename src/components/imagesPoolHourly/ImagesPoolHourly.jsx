import React, {useState} from 'react';
import classes from './ImagesPoolHourly.module.css';


const ImagesPoolHourly = (props) => {
    
    return (
        <div className={classes.card__back}>
            <img src={props.src} alt={`${props.src}`} />
        </div>
    )
    
}
export default ImagesPoolHourly;

