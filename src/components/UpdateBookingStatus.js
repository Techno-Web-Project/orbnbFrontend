import React from 'react';
import './AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import axios from './api/axios';
import { useParams } from 'react-router-dom';
import { render } from '@testing-library/react';

function UpdateBookingStatus() {
  const [bookingId, setBookingId] = useState(1); //TODO mettre à jour avec le booking passé en paramètre
  const [bookingDate, setBookingDate] = useState('2022-05-22'); //TODO mettre à jour avec le booking passé en paramètre
  const [bookingStartDate, setBookingStartDate] = useState('2022-06-23'); //TODO mettre à jour avec le booking passé en paramètre
  const [bookingEndDate, setBookingEndDate] = useState('2022-06-26'); //TODO mettre à jour avec le booking passé en paramètre
  const [housingBookedId, setHousingBookedId] = useState(5); //TODO mettre à jour avec le booking passé en paramètre
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
    <div>
      <h4>Modification du booking status</h4>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="bookingStatus">Statut de réservation</label>
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
