import React  from 'react';
import classes from './ForecastCardWeek.module.css';
import ImagesPoolWeek from '../imagesPoolWeek/ImagesPoolWeek';
import clon from './../../img/clon.png';
import rain from './../../img/rain.png';
import rain2 from './../../img/rain.png';
import thunderstorm from './../../img/thunderstorm.png';
import thunderstorm2 from './../../img/thunderstorm.png';
import thunderstorm3 from './../../img/thunderstorm.png';
import thunderstorm4 from './../../img/thunderstorm.png';


const ForecastCardWeek = (props) => {
    const imagesPool = [
        { src: {clon}},
        { src: {rain}},
        { src: {rain2}},
        { src: {thunderstorm}},
        { src: {thunderstorm2}},
        { src: {thunderstorm3}},
        { src: {thunderstorm4}},
    
    ];

    let imagesPoolWeekElements=imagesPool
    .map(image =>  <ImagesPoolWeek src={image.src}/>)
        
    return (
        <li>
            <article className={classes.card}>
            <span  className={`${props.day==='Завтра' ? classes.card__tomorrow : classes.card__day} ${classes.text}`}>{props.day}</span>
                {imagesPoolWeekElements}
            <div className={classes.card__temperature}>
                <span className={`${classes.card__max} ${classes.text}`}>{props.maxTemp}</span>
                <span className={`${classes.card__min} ${classes.text}`}>{props.minTemp}</span>
            </div>

        </article>                                     
        </li>
        
    )
    
}

export default ForecastCardWeek;