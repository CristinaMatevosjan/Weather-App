import React , {useState} from 'react';
import classes from './ForecastCardWeek.module.css';
import Loading from './../loadingAnimation/Loading';


const ForecastCardWeek = (props) => {
    const [isChangeState, setIsChangeState]=useState(true);
          
    return (
        <li >
            <article className={classes.card}>
                {!isChangeState && 
                <div> 
                    <span  className={`${props.day==='Завтра' ? classes.card__tomorrow : classes.card__day} ${classes.text}`}>{props.day}</span>
                    <div className={classes.card__back}>
                        <img src={props.img} alt={props.img}/>
                    </div>
                    <div className={classes.card__temperature}>
                        <span className={`${classes.card__max} ${classes.text}`}>{props.maxTemp}</span>
                        <span className={`${classes.card__min} ${classes.text}`}>{props.minTemp}</span>
                    </div> 
                </div>}
                <Loading/>
            </article>                                     
        </li>
    )
    }

export default ForecastCardWeek;