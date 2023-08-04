import ForecastCardHourly from '../forecastCardWeek/ForecastCardWeek';
import {useMediaQuery} from 'react-responsive'
import React from 'react';

const MediaForecastHourly = (props) => {
    let cardsHourlyDataMobile=[
        {hour:'15:00', temp:'10°C'},
        {hour:'16:00', temp:'10°C'},
        {hour:'17:00', temp:'10°C'},
        {hour:'18:00', temp:'10°C'},
        {hour:'19:00', temp:'10°C'},
        {hour:'20:00', temp:'10°C'},
        {hour:'21:00', temp:'10°C'},
        {hour:'22:00', temp:'10°C'},
        {hour:'23:00', temp:'10°C'},
        {hour:'00:00', temp:'10°C'},
        {hour:'01:00', temp:'10°C'},
        {hour:'02:00', temp:'10°C'},
        
    ]
    let cardsHourlyDataTablet=[
        {hour:'15:00', temp:'10°C'},
        {hour:'16:00', temp:'10°C'},
        {hour:'17:00', temp:'10°C'},
               
    ]
    let cardsHourlyDataDesktop=[
        {hour:'15:00', temp:'10°C'},
        {hour:'16:00', temp:'10°C'},
        {hour:'17:00', temp:'10°C'},
        {hour:'18:00', temp:'10°C'},
        {hour:'19:00', temp:'10°C'},
        {hour:'20:00', temp:'10°C'},
               
    ]
    
    let cardsHourlyElementsMobile=cardsHourlyDataMobile
    .map(cardHourly => <ForecastCardHourly hour={cardHourly.hour} temp={cardHourly.temp} />);
    let cardsHourlyElementsTablet=cardsHourlyDataTablet
    .map(cardHourly => <ForecastCardHourly hour={cardHourly.hour} temp={cardHourly.temp} />);
    let cardsHourlyElementsDesktop=cardsHourlyDataDesktop
    .map(cardHourly => <ForecastCardHourly hour={cardHourly.hour} temp={cardHourly.temp} />);

    const isBigScreen = useMediaQuery({ query: '(min-width:1440)'});
    const isMobile = useMediaQuery({ query: '( max-width:834)'});
    const isTablet=useMediaQuery({query: '(min-width:834,max-width:1439)'})

    return (
        <div>
            {isTablet && cardsHourlyElementsTablet} 
            {isMobile && cardsHourlyElementsMobile}
            {isBigScreen && cardsHourlyElementsDesktop}
        </div>
    )    
}
export default MediaForecastHourly;




