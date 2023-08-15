import React  from 'react';
import classes from './DetailedCardOther.module.css';

const DetailedCardOther = ({head, textBig, textSmall}) => {
    return (
        <li>
            <article className={`${classes.cardDetails} ${classes.other}`}>
                <h5 className={`${classes.cardDetails__head} ${classes.card__text}`}>{head}</h5>
                <div className={classes.cardDetails__box}>
                <span className={`${classes.cardDetails__textBig} ${classes.card__text}`}>{textBig} </span>
                <span className={`${textSmall==='мм рт. ст.'? classes.cardDetails__textExtraSmoll:classes.cardDetails__textSmoll } ${classes.card__text}`}>{textSmall}</span>
                </div>
            </article>
        </li>
    )
    
}
export default DetailedCardOther;
