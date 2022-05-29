import React from 'react';
import '../AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import axios from '../api/axios';

function AddCustomServiceForm() {
  const [description, setDescription] = useState('');
  const [housingId, setHousingId] = useState(5); //TODO Ajouter l'id du housing sur lequel on est
  let customServiceId = 0;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:8081/customServiceApi/addCustomService', {
        description: description,
        linkedHousingId: housingId,
      })
      .then((res) => {
        console.log(res.data.customServiceId);
        customServiceId = res.data.customServiceId;
      })
      .catch((error) => {
        console.log(error);
      });
    await axios
      .put(
        `http://localhost:8081/housingApi/assignCustomServiceToHousing/${housingId}/${customServiceId}`
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
        <h1>Ajouter des services personnalisés à mon logement</h1>
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
          <button className="baseButton plainButton">Valider</button>
        </form>
      </section>
    </div>
  );
}
export default AddCustomServiceForm;
