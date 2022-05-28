import React from 'react';
import '../AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import axios from '../api/axios';

function AddCustomConstraintForm(){
    const [description, setDescription] = useState('');
    const [housingId, setHousingId] = useState(5); //TODO Ajouter l'id du housing sur lequel on est
    let customConstraintId = 0;

    const HandleSubmit = async (e) => {
        e.preventDefault();
        await axios
          .post('http://localhost:8081/customConstraintApi/addCustomConstraint', {
            description: description,
            linkedHousingId: housingId,
          })
          .then((res) => {
            console.log(res.data.customConstraintId);
            customConstraintId = res.data.customConstraintId;
          })
          .catch((error) => {
            console.log(error);
          });
        await axios
          .put(
            `http://localhost:8081/housingApi/assignCustomConstraintToHousing/${housingId}/${customConstraintId}`
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
            <h1>Ajouter des contraintes personnalisées à mon logement</h1>
            <form onSubmit={HandleSubmit}>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    autoComplete="off"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                />
                <button className="formButton">Valider</button>
            </form>
            
            </section>
        </div>
          );
}
export default AddCustomConstraintForm;