import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(props) {
  return (
    <div className="cards">
      <h1 className="decouvrezLogements">
        Découvrez ces Logements à {props.searchedCity}
      </h1>
      <div className="cards__container">
        <div className="card__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-home.jpg"
              text="Découvrez cette magnifique propriété située dans le centre de Sydney"
              label="Maison"
              path="/Reservations"
              searchedCity2={props.searchedCity}
              searchedBeds2={props.searchedBeds}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
