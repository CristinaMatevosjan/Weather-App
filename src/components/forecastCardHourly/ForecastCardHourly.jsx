import React from 'react';
import classes from './ForecastCardHourly.module.css';
import clon from './../../img/clon.png';
import clon2 from './../../img/clon.png';
import clon3 from './../../img/clon.png';
import clon4 from './../../img/clon.png';
import thunderstorm from './../../img/thunderstorm.png';
import thunderstorm2 from './../../img/thunderstorm.png';
import clon5 from './../../img/clon.png';
import clon6 from './../../img/clon.png';
import thunderstorm3 from './../../img/thunderstorm.png';
import clon7 from './../../img/clon.png';
import clon8 from './../../img/clon.png';
import clon9 from './../../img/clon.png';
import ImagesPoolHourly from '../imagesPoolHourly/ImagesPoolHourly';



const ForecastCardHourly = (props) => {

    const imagesPool = [
        { src: {clon}},
        { src: {clon2}},
        { src: {clon3}},
        { src: {clon4}},
        { src: {thunderstorm}},
        { src: {thunderstorm2}},
        { src: {clon5}},
        { src: {clon6}},
        { src: {thunderstorm3}},
        { src: {clon7}},
        { src: {clon8}},
        { src: {clon9}}
    ];

    let imagesPoolHourlyElements=imagesPool
    .map(image =>  <ImagesPoolHourly src={image.src}/>)

    return (
            <li>
                <article className={classes.card}>
                    <span className={`${classes.card__hour} ${classes.text}`}>{props.hour}</span>
                    <div className={classes.card__back}>
                        {imagesPoolHourlyElements}                    
                    </div>
                    <span className={`${classes.card__temp} ${classes.text}`}>{props.temp}</span>
                </article>
            </li>
    )
}
export default ForecastCardHourly;


