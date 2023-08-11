import ForecastCardHourly from '../forecastCardWeek/ForecastCardWeek';
import React, {useEffect,useState} from 'react';
import clon from './../../img/clon.png';
import thunderstorm from './../../img/thunderstorm.png';

const MediaForecastHourly = (props) => {
  const [resolution, setResolution] = useState('desktop')

    let cardsHourlyDataMobile=[
        {id:1, hour:'15:00',img: clon, temp:'10°C'},
        {id:2, hour:'16:00',img: clon, temp:'10°C'},
        {id:3, hour:'17:00',img: clon, temp:'10°C'},
        {id:4, hour:'18:00',img: clon, temp:'10°C'},
        {id:5, hour:'19:00',img: thunderstorm, temp:'10°C'},
        {id:6, hour:'20:00',img: thunderstorm, temp:'10°C'},
        {id:7, hour:'21:00',img: clon , temp:'10°C'},
        {id:8, hour:'22:00',img: clon , temp:'10°C'},
        {id:9, hour:'23:00',img: thunderstorm , temp:'10°C'},
        {id:10, hour:'00:00',img:  clon, temp:'10°C'},
        {id:11, hour:'01:00',img: clon , temp:'10°C'},
        {id:12, hour:'02:00',img: clon , temp:'10°C'},
        
    ]
    let cardsHourlyDataTablet=[
        {id:1, hour:'15:00',img: clon, temp:'10°C'},
        {id:2, hour:'16:00',img: clon, temp:'10°C'},
        {id:3, hour:'17:00',img: clon, temp:'10°C'},
               
    ]
    let cardsHourlyDataDesktop=[
        {id:1, hour:'15:00',img: clon, temp:'10°C'},
        {id:2, hour:'16:00',img: clon, temp:'10°C'},
        {id:3, hour:'17:00',img: clon, temp:'10°C'},
        {id:4, hour:'18:00',img: clon, temp:'10°C'},
        {id:5, hour:'19:00',img: thunderstorm, temp:'10°C'},
        {id:6, hour:'20:00',img: thunderstorm, temp:'10°C'},
               
    ]
    
    let cardsHourlyElementsMobile=cardsHourlyDataMobile
    .map(cardHourly => <ForecastCardHourly key={cardHourly.id} hour={cardHourly.hour} img={cardHourly.img} temp={cardHourly.temp} />);
    let cardsHourlyElementsTablet=cardsHourlyDataTablet
    .map(cardHourly => <ForecastCardHourly key={cardHourly.id} hour={cardHourly.hour} img={cardHourly.img} temp={cardHourly.temp} />);
    let cardsHourlyElementsDesktop=cardsHourlyDataDesktop
    .map(cardHourly => <ForecastCardHourly key={cardHourly.id} hour={cardHourly.hour} img={cardHourly.img} temp={cardHourly.temp} />);
    
    function calculateCards() {
              const screenWidth = window.innerWidth;
              if (screenWidth >= 1440) {
                  setResolution('desktop');
              } else if (screenWidth >= 834 && screenWidth <= 1439) {
                  setResolution('tablet');
              } else {
                setResolution('mobile');

              }
            }

    useEffect(() => {      
        calculateCards();
        window.addEventListener('resize', calculateCards);
        return () => {
          window.removeEventListener('resize', calculateCards);
        };
      }, []);

      return (
        <>
            { resolution === 'desktop' && cardsHourlyElementsDesktop}
            { resolution === 'tablet' && cardsHourlyElementsTablet}
            { resolution === 'mobile' && cardsHourlyElementsMobile}
        </>
      )
    
}
export default MediaForecastHourly;


