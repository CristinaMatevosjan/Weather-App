import React  from 'react';
import classes from './Detailed.module.css';
import DetailedCardSpeed from '../detailedCardSpeed/DetailedCardSpeed';
import DetailedCardOther from '../detailedCardOther/DetailedCardOther';


const Detailed = () => {
    let detailedData=[
        {id:1, head: 'Влажность', textBig: '84', textSmall:'%'},
        {id:2, head: 'Видимость', textBig: '6.2 ', textSmall:'км'},
        {id:3, head: 'Давление', textBig: '742', textSmall:'мм рт. ст.'},
    ]

    let detailsData=JSON.parse(localStorage.getItem('dataForecast'));
    console.log(detailsData + ' detailsData');
    

    // detailedData.forEach(element => {
    //     element.textBig=detailsData.
    // });
    

    let detailedDataElements=detailedData
    .map(data => <DetailedCardOther key={data.id}  head={data.head} textBig={data.textBig} textSmall={data.textSmall}/>);

    return (
       <section className={classes.detailed}>
            <h3 className={classes.detailed__title}>Подробно на сегодня</h3>
            <ul className={classes.detailed__box}>
                <DetailedCardSpeed/>
                {detailedDataElements}              
            </ul>
        </section> 
    )
    
}

export default Detailed;