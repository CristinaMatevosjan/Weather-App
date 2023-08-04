import React  from 'react';
import classes from './DetailedCardOther.module.css';


const DetailedCardOther = (props) => {
    return (
        <li>
            <article className={`${classes.cardDetails} ${classes.other}`}>
                <h5 className={`${classes.cardDetails__head} ${classes.card__text}`}>{props.head}</h5>
                <div className={classes.cardDetails__box}>
                <span className={`${classes.cardDetails__textBig} ${classes.card__text}`}>{props.textBig} </span>
                <span className={`${props.textSmall==='мм рт. ст.'? classes.cardDetails__textExtraSmoll:classes.cardDetails__textSmoll } ${classes.card__text}`}>{props.textSmall}</span>
                </div>
            </article>
        </li>
    )
    
}
export default DetailedCardOther;
