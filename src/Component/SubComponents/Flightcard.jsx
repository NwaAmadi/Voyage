import React from 'react';
import Airtag from '../SubComponents/Airtag';

const Flightcard = ({ price, flightType, departureTime, arrivalTime, duration }) => {
  return (
    <div style={styles.card}>
      <div style={styles.leftSection}>
        {/* Flight Icon */}
        <div style={styles.icon}>
          <Airtag/>
        </div>

        {/* Flight Info */}
        <div style={styles.flightInfo}>
          <p style={styles.price}>${price}</p>
          <p style={styles.flightType}>{flightType}</p>
          <p style={styles.time}>
            {departureTime} - {arrivalTime} · {duration}
          </p>
        </div>
      </div>

      {/* Choose Button */}
      <button style={styles.chooseButton}>Choose</button>
    </div>
  );
};


const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '400px',
    margin: '10px auto',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
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
    fontSize: '12px',
  },
  chooseButton: {
    backgroundColor: '#F5F5F5',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 16px',
    cursor: 'pointer',
  },
};
export default Flightcard