import React from 'react';
import './AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import axios from './api/axios';
import { useParams } from 'react-router-dom';

function UpdateBookingStatus(props) {
  const bookingId = props.bookingId;
  const bookingDate = props.bookingDate;
  const bookingStartDate = props.bookingStartDate;
  const bookingEndDate = props.bookingEndDate;
  const housingBookedId = props.housingBookedId;
  const [bookingStatus, setBookingStatus] = useState('PENDING');

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put('http://localhost:8081/bookingApi/updateBooking', {
        bookingId: bookingId,
        bookingDate: bookingDate,
        bookingStartDate: bookingStartDate,
        bookingEndDate: bookingEndDate,
        housingBookedId: housingBookedId,
        bookingStatus: bookingStatus,
      })
      .then((res) => {
        console.log(res.data.bookingId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="updateStatus">
      <form onSubmit={HandleSubmit}>
        <h3>Statut de réservation : {bookingStatus}</h3>
        <h4>
          {bookingStartDate}{' '}
          <svg
            width="16"
            height="16"
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.03833 9.16025L20.2796 11.2958L18.5996 14.1688C18.0897 15.0438 19.1905 15.9596 19.9587 15.3022L27.6838 8.68192C28.1009 8.32375 28.1009 7.67742 27.6838 7.31984L19.9587 0.699002C19.1905 0.0380854 18.0903 0.957419 18.5996 1.82892L20.2761 4.70534L1.03833 6.83859C-0.341837 6.98792 -0.34242 9.01092 1.03833 9.16025Z"
              fill="#ED7161"
            />
          </svg>{' '}
          {bookingEndDate}
        </h4>
        <select
          onChange={(e) => setBookingStatus(e.target.value)}
          value={bookingStatus}
          required
          id="bookingStatus"
          type="text"
        >
          <option value="PENDING">En attente</option>
          <option value="CONFIRMED">Confirmer</option>
          <option value="REFUSED">Refuser</option>
        </select>
        <button className="baseButton plainButton">Valider</button>
      </form>
    </div>
  );
}

export default UpdateBookingStatus;
