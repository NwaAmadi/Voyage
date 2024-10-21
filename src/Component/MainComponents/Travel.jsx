import '../../CSS/Travel.css';
import dropdown from '../../Elements/dropdown.png'
import Footer from '../Footer';
import Navbar from "../Navbar";
import Flightcard from '../SubComponents/Flightcard';

function Travel(params) {

    let takeoff = 'Sanfrancisco';
    let destination = 'Newyork';
    return (
        <div className>
            <Navbar />
            <div className='container2'>
                <div className='Body2'>
                    <div className='upperSection'>
                        <h1> {takeoff} to {destination}</h1>
                        <h3>1 traveler, 1 economy, nonstop</h3>

                            <div className='buttonSection'>

                                <div className='Departure'>
                                    <div className='content'>
                                        <p>Departure 6AM-12PM</p>
                                    </div>
                                    <div className='imageClass'>
                                        <img src={dropdown} alt=''/>
                                    </div>
                                </div>

                               <div className='Departure'>
                                    <p>Non stop</p>
                                    <div className='imageClass'>
                                        <img className='dropdown' src={dropdown} alt=''/>
                                    </div>
                                </div>

                                <div className='Departure'>
                                    <p>Alaska Airlines</p>
                                    <div className='imageClass'>
                                        <img className='dropdown' src={dropdown} alt=''/>
                                    </div>
                                </div>

                                <div className='Departure'>
                                    <p>Delta</p>
                                    <div className='imageClass'>
                                        <img className='dropdown' src={dropdown} alt=''/>
                                    </div>
                                </div>

                                <div className='Departure'>
                                    <p>United</p>
                                    <div className='imageClass'>
                                        <img className='dropdown' src={dropdown} alt=''/>
                                    </div>
                                </div>
                               
                            </div>
                                
                    </div>
                    
                </div>
                
                <Flightcard 
                    price={198}
                    flightType="Nonstop"
                    departureTime="5:30 AM"
                    arrivalTime="1:00 PM"
                    duration="6h 30m"
                
                />

                <Flightcard 
                    price={198}
                    flightType="Nonstop"
                    departureTime="5:30 AM"
                    arrivalTime="1:00 PM"
                    duration="6h 30m"
                
                />

                <Flightcard 
                    price={198}
                    flightType="Nonstop"
                    departureTime="5:30 AM"
                    arrivalTime="1:00 PM"
                    duration="6h 30m"
                
                />

                <Flightcard 
                    price={198}
                    flightType="Nonstop"
                    departureTime="5:30 AM"
                    arrivalTime="1:00 PM"
                    duration="6h 30m"
                
                />

                <Flightcard 
                    price={198}
                    flightType="Nonstop"
                    departureTime="5:30 AM"
                    arrivalTime="1:00 PM"
                    duration="6h 30m"
                
                />

                <Flightcard 
                    price={198}
                    flightType="Nonstop"
                    departureTime="5:30 AM"
                    arrivalTime="1:00 PM"
                    duration="6h 30m"
                
                />

            </div>
            <Footer/>
        </div>
    );
}
export default Travel