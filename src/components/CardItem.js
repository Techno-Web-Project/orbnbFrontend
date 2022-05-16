import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function CardItem(props) {
  const [houses, setHouses] = useState([])

  useEffect(() => {
      axios.get('http://localhost:8081/SpringMVC/housing/retrieve-all-housings')
      .then(res => {
          console.log(res)
          setHouses(res.data)
      })
      .catch(err => {
          console.log(err)
      })
  }, [])
  
  return (
    <>
      <ul>
        {houses.map(house=> (
          <li key={house.id} className="cards__item">
              <Link className="cards__item__link" to={props.path}>
                  <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Travel"
                    className="cards__item__img" />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">{house.description}</h5>
                  </div>
              </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CardItem;