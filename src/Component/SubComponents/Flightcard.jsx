import React from 'react';
import Airtag from '../SubComponents/Airtag';

const Flightcard = ({ price, flightType, departureTime, arrivalTime, duration }) => {
  return (
    <div style={styles.card}>
      <div style={styles.leftSection}>
        <div style={styles.icon}>
          <Airtag/>
        </div>

        <div style={styles.flightInfo}>
          <p style={styles.price}>${price}</p>
          <p style={styles.flightType}>{flightType}</p>
          <p style={styles.time}>
            {departureTime} - {arrivalTime} · {duration}
          </p>
        </div>
      </div>
      <button style={styles.chooseButton}>Choose</button>
    </div>
  );
};


const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '50px',
    padding: '5px',
    borderRadius: '8px',
    margin: '0 auto',
    marginTop: '10px',
    minWidth: '1000px',
    
  },
  leftSection: {
    display:'flex',
  },
  icon: {
    fontSize: '24px',
    marginRight: '10px',
  },
  flightInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
  },
  flightType: {
    color: '#A6793C',
    fontSize: '14px',
    margin: '2px 0',
  },
  time: {
    color: '#A6793C',
  },
  chooseButton: {
    backgroundColor: 'rgba(245, 240, 229, 1)',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
    float: 'right',
    marginLeft: 'auto',
    color: 'rgba(28, 23, 13, 1)',
    height: '30px',
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
};
export default Flightcard