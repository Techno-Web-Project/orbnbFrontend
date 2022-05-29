import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/housingApi/getAllHousings')
      .then((res) => {
        console.log(res);
        setHouses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 align="center">Houses</h1>
      <ul>
        {houses.map((house) => (
          <div className="houseDiv">
            <li key={house.id}>
              <div className="houseOfCard">
                <h3>{house.description}</h3>
                <h4>
                  {house.city} {house.city} {house.street} {house.postalCode}
                </h4>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
