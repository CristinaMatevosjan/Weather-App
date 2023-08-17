import  { useContext , useEffect, useState} from 'react';
import Context from '../Context';
import FormSearch from '../outgoingSideBar/formSearch/FormSearch';

const ApiForecast = () => {
  const [forecast, setForecast] = useState({
    temp: "1",
    feels_like: "",
    description: "Снег",
    pressure: "742",
    humidity: "84",
    visibility: "6.2",
    speedWind: "7",
  });
  const value = useContext(Context);
  const UpperCaseFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  let lat = value.location.lat;
  let lon = value.location.lon;

  useEffect(() => {
    if (Boolean(lat) && Boolean(lon)) {
      getForecast();
    }
  }, [lat, lon]);

  localStorage.setItem('dataForecast',JSON.stringify(forecast));

  const getForecast = () => {
    // console.log(process.env.REACT_APP_API_KEY_WEATHER);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=34e4005e3785495e2bd9bf8211a0fda4&units=metric&lang=ru`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setForecast({ temp: Math.round(data.main.temp) });
        setForecast({ feels_like: Math.round(data.main.feels_like) });
        setForecast({
          description: UpperCaseFirstLetter(data.weather[0].description),
        });
        console.log(data.weather[0].icon);
        setForecast({ pressure: data.main.pressure });
        setForecast({ humidity: data.main.humidity });
        setForecast({ visibility: data.visibility / 1000 });
        setForecast({ speedWind: Math.round(data.wind.speed) });
        console.log(Math.round(data.wind.deg));
      })
      .catch(() => {
        console.log("error, Kristina!");
      });

    return <FormSearch />;
  };
}
export default ApiForecast;
