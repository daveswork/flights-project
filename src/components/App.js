import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import NavBar from './NavBar';
import FlightList from './FlightList';

import { useEffect, useState } from 'react';

import { useOutletContext, Outlet } from 'react-router-dom';

function App() {

  const [flights, setFlights] = useState([])

  useEffect(()=>{
    fetch("http://localhost:7000/flights")
    .then(response => response.json())
    .then(data => setFlights(data))
  }, [])

  function addFlight(newFlight){
    newFlight.id = parseInt(flights[flights.length - 1].id) + 1
    console.log(newFlight)
    // setFlights([...flights, newFlight])
  }

  return (
    <div className="App">
      <NavBar/>
      <Header/>
      
      <Outlet context={{flights:flights, addFlight:addFlight}}/>

    </div>
  );
}

export default App;
