import React from 'react';
import SB from '../Elements/search-button.svg';
import '../CSS/Body.css'
import Input from './Input';

const Body = () => 
    <div className='Body'>
        <div className="hero-section">
            <div className="overlay">
                <h1>Flights</h1>
                <div className="search-bar">
                    <img className='SB' src={SB} alt="Search Bar" />
                    <input type="text" placeholder="Where are you going?" />
                    <button className="search-button">One way</button>
                </div>
            </div>
        </div>
        <div className='IF'>
        <div className="input-fields">
            <Input  for = 'departure' id = 'departure' type = 'text' placeholder ='Departure'/>
            <Input  for = 'arrival' id = 'arrival' type = 'text' placeholder ='Arrival'/>
            <Input  for = 'departure-date' id = 'departure-date' type = 'date' label="Departure Date" placeholder ='Departure date'/>
            <Input  for = 'return-date' id = 'arrival' type = 'date' label='Arrival Date' placeholder ='Arrival'/>
            
        </div>
        </div>
        <div className='BC'>
            <button className='sb2'>search</button>
        </div>
    </div>
export default Body