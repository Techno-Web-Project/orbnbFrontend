import React from 'react';
import '../AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import axios from '../api/axios';

function AddConstraintForm() {
  const [constraint, setConstraint] = useState(-1);
  const params = useParams();
  const housingId = params.id;
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
    if (constraint != -1) {
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
    <div className="serviceDiv">
      <svg
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37 0C16.55 0 0 16.5484 0 37C0 57.4502 16.5484 74 37 74C57.45 74 74 57.4516 74 37C74 16.5498 57.4516 0 37 0ZM37 68.2188C19.7453 68.2188 5.78125 54.256 5.78125 37C5.78125 19.7451 19.744 5.78125 37 5.78125C54.2547 5.78125 68.2188 19.744 68.2188 37C68.2188 54.2549 54.256 68.2188 37 68.2188ZM49.6589 28.429L41.0879 37L49.6589 45.571C50.7878 46.6999 50.788 48.5301 49.6591 49.6589C48.5301 50.7878 46.6996 50.7877 45.5711 49.6589L37 41.0879L28.4289 49.6589C27.3004 50.7876 25.4702 50.788 24.3409 49.6589C23.212 48.53 23.2122 46.6998 24.3411 45.571L32.9121 37L24.3411 28.429C23.2122 27.3001 23.212 25.4699 24.3409 24.3411C25.4699 23.2123 27.3004 23.2122 28.4289 24.3411L37 32.9121L45.5711 24.3411C46.6999 23.2123 48.5301 23.2122 49.6591 24.3411C50.7878 25.47 50.7877 27.3002 49.6589 28.429Z"
          fill="#FD5A52"
        />
      </svg>

      <h1>Ajouter des contraintes à mon logement</h1>
      <form onSubmit={HandleSubmit}>
        <select
          onChange={(e) => setConstraint(e.target.value)}
          value={constraint}
          required
          id="constraint"
          type="text"
        >
          <option value="-1">Contrainte</option>

          {constraints.map((constraint) => (
            <option value={constraint.constraintsId}>
              {constraint.description}
            </option>
          ))}
        </select>
        <button className="baseButton plainButton">Ajouter</button>
      </form>
    </div>
  );
}

export default AddConstraintForm;
