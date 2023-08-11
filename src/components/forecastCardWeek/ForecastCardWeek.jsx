import React  from 'react';
import classes from './ForecastCardWeek.module.css';

const ForecastCardWeek = (props) => {
      
    return (
        <li >
            <article className={classes.card}>
            <span  className={`${props.day==='Завтра' ? classes.card__tomorrow : classes.card__day} ${classes.text}`}>{props.day}</span>
            <div className={classes.card__back}>
                <img src={props.img} alt={props.img}/>
            </div>
            <div className={classes.card__temperature}>
                <span className={`${classes.card__max} ${classes.text}`}>{props.maxTemp}</span>
                <span className={`${classes.card__min} ${classes.text}`}>{props.minTemp}</span>
            </div>

        </article>                                     
        </li>
        
    )
    
}

export default ForecastCardWeek;