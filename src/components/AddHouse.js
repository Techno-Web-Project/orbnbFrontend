import React from 'react';
import './AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import axios from './api/axios';

function AddHouse(props) {
  const [description, setDescription] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [housingType, setHousingTYpe] = useState('HOUSE');
  const [numberOfBed, setNumberOfBed] = useState(0);
  let housingId = 0;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:8081/housingApi/addHousing', {
        description: description,
        street: street,
        city: city,
        country: country,
        postalCode: postalCode,
        validate: false,
        housingType: housingType,
        numberOfBed: numberOfBed,
        person: props.connectedId,
      })
      .then((res) => {
        console.log(res.data.id);
        housingId = res.data.id;
      })
      .catch((error) => {
        console.log(error);
      });
    await axios
      .put(
        `http://localhost:8081/personApi/assignHousing/${props.connectedId}/${housingId}`
      )
      .then((res) => {
        console.log(res);
        console.log(housingId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Register">
      <section>
        <h1>Ajouter un logement</h1>
        <form className="form" onSubmit={HandleSubmit}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            autoComplete="off"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />

          <label htmlFor="street">Rue</label>
          <input
            type="text"
            id="street"
            onChange={(e) => setStreet(e.target.value)}
            value={street}
            required
          />

          <label htmlFor="city">Ville</label>
          <input
            type="text"
            id="city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            required
          />

          <label htmlFor="country">Pays</label>
          <input
            type="text"
            id="country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            required
          />

          <label htmlFor="postalCode">Code Postal</label>
          <input
            type="text"
            id="postalCode"
            onChange={(e) => setPostalCode(e.target.value)}
            value={postalCode}
            required
          />

          <label htmlFor="housingType">Type de logement</label>
          <select
            onChange={(e) => setHousingTYpe(e.target.value)}
            value={housingType}
            required
            id="housingType"
            type="text"
          >
            <option value="HOUSE">Maison</option>
            <option value="APARTMENT">Appartement</option>
            <option value="ROOM">Chambre</option>
          </select>

          <label htmlFor="numberOfBed">Nombre de couchage(s)</label>
          <input
            type="number"
            id="numberOfBed"
            onChange={(e) => setNumberOfBed(e.target.value)}
            value={numberOfBed}
            required
          />
          <button className="baseButton plainButton">Valider</button>
        </form>
      </section>
    </div>
  );

  /*return (
    <div className="addHouseDiv">
      <h1>Add House</h1>
      <div className="addInput">
        <label>Select File</label>
        <input type="file" name="file" />
      </div>
    </div>

  );*/
}

export default AddHouse;
