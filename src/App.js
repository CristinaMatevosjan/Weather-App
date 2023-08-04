import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import OutgoingSideBar from './components/outgoingSideBar/OutgoingSideBar';
import SideBar from './components/side-bar/SideBar';
import Forecast from './components/forecast/Forecast';
import './App.css';
import Detailed from './components/detailed/Detailed';

function App() {
  const [isOutgoingSideBarOpen, setIsOutgoingSideBarOpen] = useState(false);

  return (
    <BrowserRouter>
        <div className='app'>
          <SideBar setOutgoingSideBarStatus={setIsOutgoingSideBarOpen}/>
          <OutgoingSideBar isOpen={isOutgoingSideBarOpen} setOutgoingSideBarStatus={setIsOutgoingSideBarOpen}/>
            <div className='core'>
                  <div className='core__box center'>
                      <Forecast/>
                      <Detailed/>
                  </div>
              </div>
        </div>
    </BrowserRouter> 
    
  );
}

export default App;
