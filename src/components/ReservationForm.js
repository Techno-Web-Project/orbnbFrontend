import React from 'react';
import './AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import axios from './api/axios';

function ReservationForm() {
  const [housingId, setHousingId] = useState(6); //TODO mettre l'id du housing sur lequel on est
  const [renterId, setRenterId] = useState(3); //TODO mettre l'id de la personne connectée
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  let bookingAvailable = false;
  let bookingId = 0;

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

    if (bookingAvailable == true) {
      await axios
        .post('http://localhost:8081/bookingApi/addBooking', {
          bookingDate: bookingDate,
          bookingStartDate: startDate,
          bookingEndDate: endDate,
          housingBookedId: housingId,
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
      //TODO Popup échec
    }
  };

  return (
    <div className="Register">
      <section>
        <h1>Réserver ce logement</h1>
        <form onSubmit={HandleSubmit}>
          <label htmlFor="startDate">Date de début</label>
          <input
            type="date"
            id="startDate"
            autoComplete="off"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            required
          />
          <label htmlFor="endDate">Date de fin</label>
          <input
            type="date"
            id="endDate"
            autoComplete="off"
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
            required
          />
          <button className="formButton">Réserver</button>
        </form>
      </section>
    </div>
  );
}

export default ReservationForm;
