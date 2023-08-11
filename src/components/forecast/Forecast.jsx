import {React, useState} from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';
import classes from './Forecast.module.css';
import MediaForecastWeek from '../mediaForecast/MediaForecastWeek';
import MediaForecastHourly from '../mediaForecast/MediaForecastHourly';

const Forecast = (props) => {
    const [isActive, setActive]=useState(true);
    const changeWeek = () => {
        if(isActive!==true)
        setActive(true);        
    }
    const changeHourly = () => {
        setActive(!isActive)
    }

    return (
        <section className={classes.forecast}>
            <div className={classes.forecast__heading}>
                <h4 className={classes.forecast__title}>Прогноз </h4>
                <div className={classes.forecast__box}>
                    <NavLink  to='/week' onClick= {changeWeek} className={`${classes.labelWeek} ${classes.label} ${isActive? classes.forecastActive: ''}`} > на неделю</NavLink>
                    <NavLink  to='/hourly' onClick={changeHourly} className={`${classes.label} ${!isActive? classes.forecastActive: ''}`} > почасовой</NavLink>
                </div>
            </div>
            <div className={classes.cards}>
                <button className={`${classes.arrowLeft} ${classes.arrowNone}`}>
                    <svg  width="38" height="38" viewBox="0 0 38 38" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.3" cx="19" cy="19" r="19" transform="rotate(-180 19 19)" fill="white" />
                    <path opacity="0.3"
                            d="M23 24.5L13.8735 18.8503C13.242 18.4593 13.242 17.5407 13.8735 17.1497L23 11.5"
                            stroke="#ACACAC" strokeWidth="3" />
                    </svg>
                </button>
                <ul className={classes.listCards}>
                <Routes>
                    <Route path='*' element={<MediaForecastWeek/>} />         
                    <Route  path='/hourly'  element={<MediaForecastHourly/>} />
                </Routes>
                </ul>
                <button className={`${classes.arrowRight} ${classes.arrowNone}`}>
                        <svg  width="38" height="38" viewBox="0 0 38 38" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="19" cy="19" r="19" fill="white" />
                        <path d="M15 13.5L24.1265 19.1497C24.758 19.5407 24.758 20.4593 24.1265 20.8503L15 26.5"
                            stroke="#ACACAC" strokeWidth="3" />
                        </svg>
                </button>
            </div>
        </section>
     
    )
    
}

export default Forecast;
