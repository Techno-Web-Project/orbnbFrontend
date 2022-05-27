import CardItem from './CardItem';
import './Cards.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cards(props) {
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
    <div className="cards">
      <h1 className="decouvrezLogements">
        Découvrez ces Logements à {props.searchedCity}
      </h1>
      <div className="cards__container">
        <div className="card__wrapper">
          <ul className="cards__item">
            {houses
              .filter((house) => {
                if (
                  (props.searchedCity == '' || props.searchedCity == '...') &&
                  props.searchedBeds == 1
                ) {
                  return house;
                } else if (
                  (house.city
                    .toLowerCase()
                    .includes(props.searchedCity.toLowerCase()) ||
                    props.searchedCity == '...') &&
                  house.numberOfBed >= props.searchedBeds
                ) {
                  return house;
                }
              })
              .map((house) => (
                <CardItem
                  id={house.id}
                  src={`images/${house.housingPictures[0].fileLocalisation}`}
                  text="Découvrez cette magnifique propriété située dans le centre de Sydney"
                  label="Maison"
                  path="/Reservations"
                  description={house.description}
                  city={house.city}
                  country={house.country}
                  numberOfBed={house.numberOfBed}
                  rating={4}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
