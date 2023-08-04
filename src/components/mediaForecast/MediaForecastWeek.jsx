import ForecastCardWeek from '../forecastCardWeek/ForecastCardWeek';
import {useMediaQuery} from 'react-responsive'
import React from 'react';

const MediaForecastWeek = (props) => {
    let cardsWeekDataMobile= [
        {id:1, day:'Завтра', maxTemp:'10°',minTemp:'4°C'},
        {id:2, day:'Пн, 15 мар', maxTemp:'10°',minTemp:'4°C'},
        {id:3, day:'Вт, 16 мар', maxTemp:'10°',minTemp:'4°C'},
        {id:4, day:'Ср, 17 мар', maxTemp:'10°',minTemp:'4°C'},
        {id:5, day:'Чт, 18 мар', maxTemp:'10°',minTemp:'4°C'},
        {id:6, day:'Пт, 19 мар', maxTemp:'10°',minTemp:'4°C'},
        {id:7, day:'Сб, 20 мар', maxTemp:'10°',minTemp:'4°C'},
    ]
    
    let cardsWeekDataTablet= [
        {day:'Завтра', maxTemp:'10°',minTemp:'4°C'},
        {day:'Пн, 15 мар', maxTemp:'10°',minTemp:'4°C'},
        {day:'Вт, 16 мар', maxTemp:'10°',minTemp:'4°C'},
    ]
    
    let cardsWeekDataDesktop= [
        {day:'Завтра', maxTemp:'10°',minTemp:'4°C'},
        {day:'Пн, 15 мар', maxTemp:'10°',minTemp:'4°C'},
        {day:'Вт, 16 мар', maxTemp:'10°',minTemp:'4°C'},
        {day:'Ср, 17 мар', maxTemp:'10°',minTemp:'4°C'},
        {day:'Чт, 18 мар', maxTemp:'10°',minTemp:'4°C'},
        {day:'Пт, 19 мар', maxTemp:'10°',minTemp:'4°C'},
       
    ]
    let cardsWeekElementsMobile=cardsWeekDataMobile
        .map(cardWeek=>  <ForecastCardWeek  day={cardWeek.day} maxTemp={cardWeek.maxTemp} minTemp={cardWeek.minTemp}/>);
        let cardsWeekElementsTablet=cardsWeekDataTablet
        .map(cardWeek=>  <ForecastCardWeek day={cardWeek.day} maxTemp={cardWeek.maxTemp} minTemp={cardWeek.minTemp}/>);
        let cardsWeekElementsDesktop=cardsWeekDataDesktop
        .map(cardWeek=>  <ForecastCardWeek day={cardWeek.day} maxTemp={cardWeek.maxTemp} minTemp={cardWeek.minTemp}/>);
    
        const isBigScreen = useMediaQuery({ query: '(min-width:1440)'});
        const isMobile = useMediaQuery({ query: '( max-width:834)'});
        const isTablet=useMediaQuery({query: '(min-width:834,max-width:1439)'});
    

    return ( <div>
        {isTablet && cardsWeekElementsTablet}
        {isMobile && cardsWeekElementsMobile}
        {isBigScreen && cardsWeekElementsDesktop}
    </div>
        
    )
    
}
export default MediaForecastWeek;


   