const btn=document.getElementById('search-city');
const close=document.getElementById('close');
const panel=document.getElementById('left-panel');

const labelWeek=document.querySelector('.label-week');
const labelHourly=document.querySelector('.label-hourly');
const forecastHours=document.querySelector('.card_active');


btn.onclick=function() {
    panel.classList.add('active');
}

close.onclick=function() {
    panel.classList.remove('active');
}

labelWeek.onclick=function() {
    if(!labelWeek.classList.contains('forecast__active')){
        labelWeek.classList.add('forecast__active');
        labelHourly.classList.remove('forecast__active');
        forecastHours.classList.add('none');

    }

}

labelHourly.onclick=function() {
    if(!labelHourly.classList.contains('forecast__active')){
        labelHourly.classList.add('forecast__active');
        labelWeek.classList.remove('forecast__active');
        forecastHours.classList.remove('none');
    }
}