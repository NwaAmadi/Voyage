import '../../CSS/Travel.css';
import dropdown from '../../Elements/dropdown.png'
import Navbar from "../Navbar";

function Travel(params) {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='Body'>
                    <div className='upperSection'>
                        <h1>San Francisco to new york</h1>
                        <h3>1 traveler, 1 economy, nonstop</h3>
                            <div className='buttonSection'>
                                <div className='Departure'>
                                    <p>Departure 6AM-12PM</p>
                                    <img className='dropdown' src={dropdown} alt=''/>
                                </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default Travel