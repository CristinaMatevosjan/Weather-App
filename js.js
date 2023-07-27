const btn=document.getElementById('search-city');
const close=document.getElementById('close');
const panel=document.getElementById('left-panel');

const labelWeek=document.querySelector('.label-week');
const labelHourly=document.querySelector('.label-hourly');
const forecastHours=document.querySelector('.card_active');

const mediaQuery = window.matchMedia('(max-width: 834px)')
const mbForecast=document.querySelector('.forecast');
const hourHidden=document.querySelectorAll('.hour-hid');
const seventhСard=document.querySelector('.hid');


btn.onclick=function() {
    panel.classList.add('active');
}

close.onclick=function() {
    panel.classList.remove('active');
}

// function sevenDays() {
//     if (!mediaQuery.matches) {
//         seventhСard.classList.add('hid');
        
//     }
//     else seventhСard.classList.remove('hid');
// }

labelWeek.onclick=function() {
    if(!labelWeek.classList.contains('forecast__active')){
        labelWeek.classList.add('forecast__active');
        labelHourly.classList.remove('forecast__active');
        forecastHours.classList.add('none');
        mbForecast.classList.remove('mb');
           
        }
    if (mediaQuery.matches) {
            seventhСard.classList.remove('hid');
        } 
    else {
            seventhСard.classList.add('hid');
            
        }
    for (let i = 0; i < hourHidden.length; i++) {
            hourHidden[i].classList.add('hour-hid');
            
    }
        
    }


labelHourly.onclick=function() {
    if(!labelHourly.classList.contains('forecast__active')){
        labelHourly.classList.add('forecast__active');
        labelWeek.classList.remove('forecast__active');
        forecastHours.classList.remove('none');
        seventhСard.classList.add('hid');
        
    }
    if (mediaQuery.matches) {
        mbForecast.classList.add('mb');
        for (let i = 0; i < hourHidden.length; i++) {
            hourHidden[i].classList.remove('hour-hid');
            
        }
    }
}
// sevenDays();