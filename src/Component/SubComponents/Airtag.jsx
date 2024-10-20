import '../../CSS/Airtag.css';
import airplane from '../../Elements/Airplane.png';

function Airtag(params) {
    return (
        <div className="airtag-container">
            <div>
                <img src={airplane} alt=" " />
            </div>
        </div>
    );
}
export default Airtag
