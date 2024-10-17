import React from 'react';
import '../CSS/Navbar.css';
import Icon from '../Elements/Icon.svg';
import user from '../Elements/User3.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

    return(
        <div>
            <nav>
                <div className = 'leftlinks'>
                    <img id="logo" src={Icon} alt="" />
                    <p><b>Voyage Vista</b></p>
                </div>
                <ul className='navlinks'>
                    <li><button onClick={() => handleClick('/Travel')}>Travel</button></li>
                    <li><button onClick={() => handleClick('/Explore')}>Explore</button></li>
                    <li><button onClick={() => handleClick('/Flights')}>Flights</button></li>
                    <li><button onClick={() => handleClick('/Hotels')}>Hotels</button></li>
                    <img id="ProfilePicture" src={user} alt=''/>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar