import React, { useState}  from 'react';
import {BrowserRouter} from 'react-router-dom';
import OutgoingSideBar from './components/outgoingSideBar/OutgoingSideBar';
import SideBar from './components/side-bar/SideBar';
import Forecast from './components/forecast/Forecast';
import './App.css';
import Detailed from './components/detailed/Detailed';
import Context from './components/Context';

function App() {
  const [isOutgoingSideBarOpen, setIsOutgoingSideBarOpen] = useState(false);

  const [citySearch, setCitySearch] = useState({
    citySearch: "Москва",
    err: "",
  });

  const [searchHistory, setSearchHistory] = useState([]);
  const [location, setLocation] = useState({ lat: "", lon: "" });

  const getCity = (e) => {
    e.preventDefault();
    const query = e.target.elements.city.value;
    localStorage.setItem("query", query);

    fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data[0]);
        const cityData = data[0].address.city;
        console.log(cityData);
        setLocation({ lat: data[0].lat, lon: data[0].lon });
        setCitySearch({ citySearch: cityData });
        setSearchHistory((prevHistory) => [
          cityData,
          ...prevHistory.slice(0, 4),
        ]);
        setIsOutgoingSideBarOpen(false);
        e.target.elements.city.value = "";
      })
      .catch(() => {
        setCitySearch({ err: "Упс! Город не найден, попробуйте другой" });
        e.target.elements.city.value = "";
      });
  };

  const handleSearchItemClick = (item) => {
    console.log(item);
    setIsOutgoingSideBarOpen(false);
    citySearch.citySearch = item;
  };

  const value = {
    getCity,
    citySearch,
    searchHistory,
    handleSearchItemClick,
    location,
  };

  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <div className="app">
          <SideBar setOutgoingSideBarStatus={setIsOutgoingSideBarOpen} />
          <OutgoingSideBar
            isOpen={isOutgoingSideBarOpen}
            setOutgoingSideBarStatus={setIsOutgoingSideBarOpen}
          />
          <div className="core">
            <div className="core__box center">
              <Forecast />
              <Detailed />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}
export default App;
