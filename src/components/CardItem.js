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

  const rating = 4.4
  let oneStar = '#DEDEDE'
  let twoStars = '#DEDEDE'
  let threeStars = '#DEDEDE'
  let fourStars = '#DEDEDE'
  let fiveStars = '#DEDEDE'

  if(rating >= 1) {
    oneStar = '#FFC700'
  }
  if(rating >= 2) {
    twoStars = '#FFC700'
  }
  if(rating >= 3) {
    threeStars = '#FFC700'
  }
  if(rating >= 4) {
    fourStars = '#FFC700'
  }
  if(rating >= 5) {
    fiveStars = '#FFC700'
  }
  
  return (
    <>
      <ul className="cards__item">
        {houses.map(house=> (
          <li key={house.id} className="cards__individuelle">
              <Link className="cards__item__link" to={props.path}>
                  <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Travel"
                    className="cards__item__img" />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">{house.description}</h5>
                    <h5 className="cards__item__smallText">{house.city}, {house.country}</h5>
                    <div className="stars">
                      <svg width="14" height="13" viewBox="0 0 14 13" fill={oneStar} xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"/>
                      </svg>
                      <svg width="14" height="13" viewBox="0 0 14 13" fill={twoStars} xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"/>
                      </svg>
                      <svg width="14" height="13" viewBox="0 0 14 13" fill={threeStars} xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"/>
                      </svg>
                      <svg width="14" height="13" viewBox="0 0 14 13" fill={fourStars} xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"/>
                      </svg>
                      <svg width="14" height="13" viewBox="0 0 14 13" fill={fiveStars} xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"/>
                      </svg>
                    </div>
                  </div>
              </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CardItem;