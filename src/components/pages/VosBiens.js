import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem';
import axios from 'axios';
import '../Cards.css';
import '../VosBiens.css';
import '../Button.css';
import { Link } from 'react-router-dom';

function VosBiens(props) {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/personApi/getPersonByLogin/${props.connectedUser}`
      )
      .then((res) => {
        console.log(res.data.housingsOwned);
        setHouses(res.data.housingsOwned);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="biens-div">
      <h1>Vos Biens</h1>
      <div className="cards__container">
        <div className="card__wrapper">
          <ul className="cards__item">
            {houses.map((house) => {
              const thumbnail = house.housingPictures[0]
                ? `images/${house.housingPictures[0].fileLocalisation}`
                : 'images/img-home-thumbnail.jpg';
              return (
                <CardItem
                  id={house.id}
                  src={thumbnail}
                  text="Découvrez cette magnifique propriété située dans le centre de Sydney"
                  label={house.housingType}
                  path="/Reservations"
                  description={house.description}
                  city={house.city}
                  country={house.country}
                  numberOfBed={house.numberOfBed}
                  rating={4}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <Link to="/add" className="addHouse profileButton formButton">
        <svg
          width="20"
          height="20"
          viewBox="0 0 55 55"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38.099 27.5C38.099 28.6866 37.1371 29.6484 35.9506 29.6484H29.6484V35.9506C29.6484 37.1371 28.6866 38.099 27.5 38.099C26.3134 38.099 25.3516 37.1371 25.3516 35.9506V29.6484H19.0494C17.8629 29.6484 16.901 28.6866 16.901 27.5C16.901 26.3134 17.8629 25.3516 19.0494 25.3516H25.3516V19.0494C25.3516 17.8629 26.3134 16.901 27.5 16.901C28.6866 16.901 29.6484 17.8629 29.6484 19.0494V25.3516H35.9506C37.137 25.3516 38.099 26.3134 38.099 27.5V27.5ZM55 15.9384V39.0616C55 43.0787 53.4356 46.8554 50.5952 49.6958C50.1427 50.0151 46.4078 55 39.0616 55H15.9384C8.59311 55 4.86202 50.0184 4.40483 49.6958C1.56438 46.8554 0 43.0786 0 39.0616V15.9384C0 11.9212 1.56438 8.14462 4.40483 5.30417C4.8573 4.98491 8.59225 0 15.9384 0H39.0616C46.4069 0 50.138 4.98158 50.5952 5.30417C53.4357 8.14462 55 11.9214 55 15.9384V15.9384ZM50.7031 15.9384C50.7031 13.0691 49.5857 10.3715 47.5568 8.3426C47.0861 8.00411 44.473 4.29688 39.0616 4.29688H15.9384C10.556 4.29688 7.89798 8.0155 7.44315 8.3426C5.41428 10.3715 4.29688 13.0691 4.29688 15.9384V39.0616C4.29688 41.9309 5.41428 44.6285 7.44315 46.6574C7.91388 46.9959 10.527 50.7031 15.9384 50.7031H39.0616C44.444 50.7031 47.102 46.9845 47.5568 46.6574C49.5857 44.6285 50.7031 41.9309 50.7031 39.0616V15.9384Z" />
        </svg>
        Ajouter un bien
      </Link>
    </div>
  );
}

export default VosBiens;
