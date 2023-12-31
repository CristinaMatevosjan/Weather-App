import React from 'react';
import classes from './DetailedCardSpeed.module.css';

const DetailedCardSpeed = () => {
    return (
       <li>
            <article className={`${classes.cardDetails} ${classes.speed}`}>
                <h5 className={`${classes.cardDetails__head} ${classes.card__text}`}>Скорость ветра</h5>
                <div className={classes.cardDetails__box}>
                    <span className={`${classes.cardDetails__textBig} ${classes.card__text}`}>7 </span>
                    <span className={`${classes.cardDetails__textSmoll} ${classes.card__text}`}>м/с</span>
                </div>
                <div className={classes.cardDetails__direction}>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="19" cy="19" r="19" fill="#48484A" />
                                <path
                                    d="M18.1951 31.0029L10.0872 10.8978C9.76221 10.092 10.5487 9.28365 11.3631 9.58643L31.9073 17.2246C32.7267 17.5293 32.7906 18.6717 32.0237 19.0912C26.1915 22.2822 23.1612 25.3608 20.0501 31.0907C19.6388 31.8482 18.5175 31.8023 18.1951 31.0029Z"
                                    fill="#E6E6E6" />
                    </svg>
                    <span className={`${classes.cardDetails__wind} ${classes.card__text}`}>СЗ</span>
                </div>
            </article>
       </li> 
    )
}
export default DetailedCardSpeed;
