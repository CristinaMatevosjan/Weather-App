import React, {useState} from 'react';
import classes from './ImagesPoolWeek.module.css';


const ImagesPoolWeek = (props) => {
    
    return (
        <div className={classes.card__back}>
            <img src={props.src} alt={`${props.src}`} />
        </div>
    )
    
}
export default ImagesPoolWeek;



