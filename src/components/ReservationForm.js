import React from 'react';
import './AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import axios from './api/axios';
import { useParams } from 'react-router-dom';

function ReservationForm(props) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const params = useParams();
  let bookingAvailable = false;
  let bookingId = 0;
  const housingId = params.id;
  const renterId = props.connectedId;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const current = new Date();
    let month = current.getMonth() + 1;
    if (month <= 9) {
      month = `0${month}`;
    }
    const bookingDate = `${current.getFullYear()}-${month}-${current.getDate()}`;
    console.log(startDate);

    await axios
      .get(
        `http://localhost:8081/housingApi/isAvailableFromDateToDateByHousingId/${housingId}/${startDate}/${endDate}`
      )
      .then((res) => {
        console.log(res);
        bookingAvailable = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    if (bookingAvailable === true) {
      await axios
        .post('http://localhost:8081/bookingApi/addBooking', {
          bookingDate: bookingDate,
          bookingStartDate: startDate,
          bookingEndDate: endDate,
          housingBookedId: housingId,
          bookingStatus: 'PENDING',
        })
        .then((res) => {
          console.log(res.data.bookingId);
          bookingId = res.data.bookingId;
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .put(
          `http://localhost:8081/housingApi/assignBookingToHousing/${housingId}/${bookingId}`
        )
        .then((res) => {
          console.log(res);
          console.log(housingId);
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .put(
          `http://localhost:8081/personApi/assignBookingToPerson/${bookingId}/${renterId}`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      //TODO Popup échec
    } else {
    }
  };

  return (
    <div className="reservationForm">
      <h4>Réserver ce logement</h4>
      <form className="form">
        <label htmlFor="startDate">
          Du
          <input
            type="date"
            id="startDate"
            autoComplete="off"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            required
          />
        </label>

        <label htmlFor="endDate">
          Au
          <input
            type="date"
            id="endDate"
            autoComplete="off"
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
            required
          />
        </label>

        <button
          type="button"
          className="baseButton reserveButton"
          onClick={HandleSubmit}
        >
          Réserver
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
