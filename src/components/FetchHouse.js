import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardItem from './CardItem';

function FetchHouse(props) {
  const [house, setHouse] = useState([]);
  console.log('housing Url c est :');
  console.log(props.bookingUrl);

  useEffect(() => {
    async function fetchHouse() {
      const request = await axios.get(
        `http://localhost:8081/housingApi/getHousingById/${props.bookingUrl}`
      );
      console.log(request.data);
      setHouse(request.data);
      return request.data;
    }
    fetchHouse();
  }, [props.bookingUrl]);

  console.log('house c est :');
  console.log(house);

  const thumbnail = house.housingPictures?.[0]
    ? `/images/${house.housingPictures[0].fileLocalisation}`
    : '/images/img-home-thumbnail.jpg';

  return (
    <div className="cards__container">
      <div className="card__wrapper">
        <ul className="cards__item">
          <CardItem
            id={house.id}
            src={thumbnail}
            label={house.housingType ?? 'HOUSE'}
            path={`/house/${house.id}`}
            description={house.description}
            city={house.city}
            country={house.country}
            numberOfBed={house.numberOfBed}
            rating={4}
          />
        </ul>
      </div>
    </div>
  );
}

export default FetchHouse;
