import React, {useEffect, useMemo, useState}  from 'react';
import {BrowserRouter} from 'react-router-dom';
import OutgoingSideBar from './components/outgoingSideBar/OutgoingSideBar';
import SideBar from './components/side-bar/SideBar';
import Forecast from './components/forecast/Forecast';
import './App.css';
import Detailed from './components/detailed/Detailed';
import Context from './components/Context';

function App() {
  const [isOutgoingSideBarOpen, setIsOutgoingSideBarOpen] = useState(false);

  const [city,setCity]=useState("");
  const [isStart,setIsStart]=useState(false);
  const [citySearch,setCitySearch] = useState('Москва');
  const [noData,setNoData]=useState('');
  
  let historyCityes= useMemo(()=> {
    return ["","","","",""];
  }, []);

  useEffect(() => {
    const getCity=async()=>{
      const query= citySearch;
      if(isStart) {
          
          await fetch(`https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1`,)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if(!data.length){
              setNoData('Упс! Город не найден, попробуйте другой');
              setCity(noData);
            }else {
              setCitySearch(data[0].address.city)
            }
          })
          .catch(() => {
  
      })
      
      createHistoryCityes();
    }
    }
    getCity();  

    const createHistoryCityes = (historyCityes) => {
      while (true) {
        for (let i = 0; i < historyCityes.length; i++) {
          historyCityes.splice(i,1,citySearch);
        }
      }
    }  
 
  },[citySearch,isStart,historyCityes,noData])

const handleCityChange = (e) => {
      setCitySearch(setCity(e.target.value))

  }
const handleSubmit = (e) => {
      e.preventDefault();
      setIsStart(true);
      setCity('');
              
  }
        
const value= {
    city,
    citySearch,
    handleCityChange,
    handleSubmit,
    historyCityes
  }
 
  return (
    <Context.Provider value={value}>
         <BrowserRouter>
        <div className='app'>
          <SideBar setOutgoingSideBarStatus={setIsOutgoingSideBarOpen} />
          <OutgoingSideBar isOpen={isOutgoingSideBarOpen} setOutgoingSideBarStatus={setIsOutgoingSideBarOpen} />
            <div className='core'>
                  <div className='core__box center'>
                      <Forecast/>
                      <Detailed/>
                  </div>
              </div>
        </div>
    </BrowserRouter> 
    </Context.Provider>
   
  );
}
export default App;
