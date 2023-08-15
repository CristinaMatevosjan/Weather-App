import  { useContext , useEffect} from 'react';
import Context from '../Context';
import FormSearch from '../outgoingSideBar/formSearch/FormSearch';

const ApiForecast = () => {
  const value = useContext(Context);
  const UpperCaseFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  const lat = value.location.lat;
  const lon = value.location.lon;

useEffect(() => {
    if (lat && lon) {
        getForecast();
    };
},[lat,lon]);

  const getForecast = () => {
    // console.log(process.env.REACT_APP_API_KEY_WEATHER);
   
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY_WEATHER}&units=metric&lang=ru`
    )
      .then((response) => {
        if (response.ok) {
          response.json();
          
        }
      })
      .then((data, main, weather, visibility, wind) => {
        console.log(data);
        console.log(Math.round(main.temp));
        console.log(Math.round(main.feels_like));
        console.log(UpperCaseFirstLetter(weather[0].description));
        console.log(weather[0].icon);
        console.log(main.pressure);
        console.log(main.humidity);
        console.log(visibility / 1000);
        console.log(Math.round(wind.speed));
        console.log(Math.round(wind.deg));
      })
      .catch(() => {
        console.log("error, Kristina!");
      });
  };

  return <FormSearch  />;
};
export default ApiForecast;
