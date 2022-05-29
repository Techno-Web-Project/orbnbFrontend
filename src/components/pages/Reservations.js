import React, { useState, useEffect } from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Button.css';
import '../Cards.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FetchHouse from '../FetchHouse';

function Reservations(props) {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    async function fetchBooking() {
      const res = await axios.get(
        `http://localhost:8081/personApi/getPersonByLogin/${props.connectedUser}`
      );
      console.log(res.data);
      setBooking(res.data.booking);
      console.log(booking);
    }
    fetchBooking();
  }, [props.connectedUser]);

  return (
    <div className="reservations-div">
      <h1>Vos Réservations</h1>
      {console.log('booking est égale à :')}
      {console.log}
      <div className="cards__container">
        {booking.map((booking) => {
          return <FetchHouse bookingUrl={booking.housingBookedId} />;
        })}
      </div>
      <Link to="/" className="addHouse baseButton plainButton">
        <svg
          width="20"
          height="20"
          viewBox="0 0 63 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_9_335)">
            <path
              d="M27.7439 0C12.4463 0 0 12.4463 0 27.7439C0 43.0423 12.4463 55.4877 27.7439 55.4877C43.0423 55.4877 55.4877 43.0423 55.4877 27.7439C55.4877 12.4463 43.0423 0 27.7439 0ZM27.7439 50.3659C15.2702 50.3659 5.12195 40.2176 5.12195 27.744C5.12195 15.2704 15.2702 5.12195 27.7439 5.12195C40.2175 5.12195 50.3658 15.2702 50.3658 27.7439C50.3658 40.2175 40.2175 50.3659 27.7439 50.3659Z"
              fill="#fff"
            />
            <path
              d="M62.2497 58.6284L47.5667 43.9454C46.5662 42.9449 44.9459 42.9449 43.9454 43.9454C42.9449 44.9451 42.9449 46.5671 43.9454 47.5667L58.6284 62.2497C59.1286 62.7498 59.7834 63 60.439 63C61.0938 63 61.7494 62.7498 62.2497 62.2497C63.2502 61.25 63.2502 59.628 62.2497 58.6284Z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="clip0_9_335">
              <rect width="63" height="63" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Rechercher d'autres biens
      </Link>
    </div>
  );
}

export default Reservations;
