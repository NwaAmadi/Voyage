import React from 'react';
import '../CSS/Navbar.css';
import Icon from '../Elements/Icon.svg';
import user from '../Elements/User3.png'

const Navbar = () => 
    <div>
        <nav>
            <div className = 'leftlinks'>
                <img id="logo" src={Icon} alt="Description of Image" />
                <p><b>Voyage Vista</b></p>
            </div>
            <ul className='navlinks'>
                <li><a href='#'>Travel</a></li>
                <li><a href='#'>Explore</a></li>
                <li><a href='#'>Flights</a></li>
                <li><a href='#'>Hotels</a></li>
                <img id="ProfilePicture" src={user} alt='profile picture'/>
            </ul>
        </nav>
        
    </div>

export default Navbar
