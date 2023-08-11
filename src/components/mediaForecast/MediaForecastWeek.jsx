import ForecastCardWeek from '../forecastCardWeek/ForecastCardWeek';
import React, {useEffect, useState} from 'react';
import clon from './../../img/clon.png';
import rain from './../../img/rain.png';
import thunderstorm from './../../img/thunderstorm.png';

const MediaForecastWeek = (props) => {

    const [resolution, setResolution] = useState('desktop')
  
    let cardsWeekDataMobile= [
        {id:1, day:'Завтра', img: clon, maxTemp:'10°',minTemp:'4°C'},
        {id:2, day:'Пн, 15 мар',img: rain, maxTemp:'10°',minTemp:'4°C'},
        {id:3, day:'Вт, 16 мар',img: rain, maxTemp:'10°',minTemp:'4°C'},
        {id:4, day:'Ср, 17 мар',img: thunderstorm, maxTemp:'10°',minTemp:'4°C'},
        {id:5, day:'Чт, 18 мар',img: thunderstorm, maxTemp:'10°',minTemp:'4°C'},
        {id:6, day:'Пт, 19 мар',img: thunderstorm, maxTemp:'10°',minTemp:'4°C'},
        {id:7, day:'Сб, 20 мар',img: thunderstorm, maxTemp:'10°',minTemp:'4°C'},
    ]
    
    let cardsWeekDataTablet= [
        {id:1,day:'Завтра',img: clon, maxTemp:'10°',minTemp:'4°C'},
        {id:2,day:'Пн, 15 мар',img: rain, maxTemp:'10°',minTemp:'4°C'},
        {id:3,day:'Вт, 16 мар',img: rain, maxTemp:'10°',minTemp:'4°C'},
    ]
    
    let cardsWeekDataDesktop= [
        {id:1,day:'Завтра',img: clon, maxTemp:'10°',minTemp:'4°C'},
        {id:2,day:'Пн, 15 мар',img: rain, maxTemp:'10°',minTemp:'4°C'},
        {id:3,day:'Вт, 16 мар',img: rain, maxTemp:'10°',minTemp:'4°C'},
        {id:4,day:'Ср, 17 мар',img: thunderstorm, maxTemp:'10°',minTemp:'4°C'},
        {id:5,day:'Чт, 18 мар',img: thunderstorm, maxTemp:'10°',minTemp:'4°C'},
        {id:6,day:'Пт, 19 мар',img: thunderstorm, maxTemp:'10°',minTemp:'4°C'},
       
    ]
    let cardsWeekElementsMobile=cardsWeekDataMobile
        .map(cardWeek=>  <ForecastCardWeek key={cardWeek.id} day={cardWeek.day} img={cardWeek.img} maxTemp={cardWeek.maxTemp} minTemp={cardWeek.minTemp}/>);
        let cardsWeekElementsTablet=cardsWeekDataTablet
        .map(cardWeek=>  <ForecastCardWeek key={cardWeek.id} day={cardWeek.day} img={cardWeek.img} maxTemp={cardWeek.maxTemp} minTemp={cardWeek.minTemp}/>);
        let cardsWeekElementsDesktop=cardsWeekDataDesktop
        .map(cardWeek=>  <ForecastCardWeek  key={cardWeek.id} day={cardWeek.day} img={cardWeek.img} maxTemp={cardWeek.maxTemp} minTemp={cardWeek.minTemp}/>);
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
              { resolution === 'desktop' && cardsWeekElementsDesktop}
              { resolution === 'tablet' && cardsWeekElementsTablet}
			        { resolution === 'mobile' && cardsWeekElementsMobile}
              
            </>
          )

        
    }
    
export default MediaForecastWeek;


   