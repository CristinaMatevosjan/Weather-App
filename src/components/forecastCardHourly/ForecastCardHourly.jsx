import React from 'react';
import classes from './ForecastCardHourly.module.css';

const ForecastCardHourly = (props) => {

    return (
            <li >
                <article className={classes.card}>
                    <span className={`${classes.card__hour} ${classes.text}`}>{props.hour}</span>
                    <div className={classes.card__back}>
                    <div className={classes.card__back}>
                        <img src={props.img} alt={props.img}/>
                    </div>                  
                    </div>
                    <span className={`${classes.card__temp} ${classes.text}`}>{props.temp}</span>
                </article>
            </li>
    )
}
export default ForecastCardHourly;


