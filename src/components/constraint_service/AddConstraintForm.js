import React from 'react';
import '../AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import axios from '../api/axios';

function AddConstraintForm(){
    const [constraint, setConstraint] = useState(-1);
    const [housingId, setHousingId] = useState(5); //TODO Ajouter l'id du housing sur lequel on est
    const [constraints, setConstraints] = useState([]);
    useEffect(() => {
    axios
      .get('http://localhost:8081/constraintApi/getAllConstraints')
      .then((res) => {
        console.log(res);
        setConstraints(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

    const HandleSubmit = async (e) => {
        e.preventDefault();
        if(constraint!=-1){
            await axios
            .put(
            `http://localhost:8081/housingApi/assignconstraint/${housingId}/${constraint}`
            )
            .then((res) => {
            console.log(res);
            console.log(constraint);
            })
            .catch((error) => {
            console.log(error);
            });
        }
        
    };

return (
    <div className="Register">
      <section>
        <h1>Ajouter des contraintes à mon logement</h1>
        <form onSubmit={HandleSubmit}>
        <label htmlFor="constraint">Contraintes</label>
          <select
            onChange={(e) => setConstraint(e.target.value)}
            value={constraint}
            required
            id="constraint"
            type="text"
          >
              <option value='-1'>Contrainte</option>
          
        {constraints.map((constraint) => (
            <option value= {constraint.constraintsId}>{constraint.description}</option>
        ))}
        </select>
        <button className="formButton">Ajouter</button>
        </form>
        </section>
    </div>
      );
      
}

export default AddConstraintForm;