import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CardItem(props) {
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

  const rating = 4.4;
  let oneStar = '#DEDEDE';
  let twoStars = '#DEDEDE';
  let threeStars = '#DEDEDE';
  let fourStars = '#DEDEDE';
  let fiveStars = '#DEDEDE';

  if (rating >= 1) {
    oneStar = '#FFC700';
  }
  if (rating >= 2) {
    twoStars = '#FFC700';
  }
  if (rating >= 3) {
    threeStars = '#FFC700';
  }
  if (rating >= 4) {
    fourStars = '#FFC700';
  }
  if (rating >= 5) {
    fiveStars = '#FFC700';
  }

  return (
    <>
      <ul className="cards__item">
        {houses
          .filter((house) => {
            if (
              (props.searchedCity2 == '' || props.searchedCity2 == '...') &&
              props.searchedBeds2 == 1
            ) {
              return house;
            } else if (
              (house.city
                .toLowerCase()
                .includes(props.searchedCity2.toLowerCase()) ||
                props.searchedCity2 == '...') &&
              house.numberOfBed >= props.searchedBeds2
            ) {
              return house;
            }
          })
          .map((house) => (
            <li key={house.id} className="cards__individuelle">
              <Link className="cards__item__link" to={props.path}>
                <figure
                  className="cards__item__pic-wrap"
                  data-category={props.label}
                >
                  <img
                    src={`images/${house.housingPictures[0].fileLocalisation}`}
                    alt="Travel"
                    className="cards__item__img"
                  />
                </figure>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">{house.description}</h5>
                  <h5 className="cards__item__smallText">
                    {house.city}, {house.country}
                  </h5>
                  <div className="bottomCards">
                    <div className="stars">
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill={oneStar}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" />
                      </svg>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill={twoStars}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" />
                      </svg>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill={threeStars}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" />
                      </svg>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill={fourStars}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" />
                      </svg>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill={fiveStars}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" />
                      </svg>
                    </div>
                    <div className="iconCards">
                      <p>{house.numberOfBed}</p>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.3654 5.517V5.26942C12.3654 4.81333 12.1292 4.41157 11.773 4.17925V1.4785C11.773 0.767913 11.1949 0.189819 10.4843 0.189819H2.51568C1.8051 0.189819 1.22698 0.767913 1.22698 1.4785V4.17922C0.870746 4.41154 0.634613 4.8133 0.634613 5.26939V5.51698C0.269852 5.61303 0 5.94565 0 6.34017V9.23713C0 9.6929 0.36009 10.0661 0.810697 10.0873V10.4301C0.810697 10.64 0.980891 10.8102 1.19082 10.8102C1.40075 10.8102 1.57094 10.64 1.57094 10.4301V10.0883H11.429V10.4301C11.429 10.64 11.5992 10.8102 11.8092 10.8102C12.0191 10.8102 12.1893 10.64 12.1893 10.4301V10.0873C12.6399 10.066 13 9.69287 13 9.23711V6.34017C13 5.94562 12.7301 5.61303 12.3654 5.517V5.517ZM1.98725 1.4785C1.98725 1.18711 2.22429 0.950066 2.51568 0.950066H10.4843C10.7757 0.950066 11.0128 1.18711 11.0128 1.4785V3.96848H10.5059V3.29847C10.5059 2.82951 10.1244 2.44796 9.65539 2.44796H7.60998C7.14101 2.44796 6.75947 2.82951 6.75947 3.29847V3.96848H6.24053V3.29847C6.24053 2.82951 5.85899 2.44796 5.39002 2.44796H3.34461C2.87562 2.44796 2.4941 2.82951 2.4941 3.29847V3.96848H1.98725V1.4785ZM9.74563 3.29844V3.87821C9.74563 3.92798 9.70513 3.96845 9.65539 3.96845H7.60998C7.56021 3.96845 7.51974 3.92795 7.51974 3.87821V3.29844C7.51974 3.24868 7.56024 3.20821 7.60998 3.20821H9.65539C9.70516 3.20821 9.74563 3.24868 9.74563 3.29844ZM5.48026 3.29844V3.87821C5.48026 3.92798 5.43976 3.96845 5.39002 3.96845H3.34461C3.29484 3.96845 3.25437 3.92795 3.25437 3.87821V3.29844C3.25437 3.24868 3.29487 3.20821 3.34461 3.20821H5.39002C5.43976 3.20821 5.48026 3.24868 5.48026 3.29844V3.29844ZM1.39488 5.26939C1.39488 4.97126 1.63744 4.72872 1.93558 4.72872H11.0644C11.3626 4.72872 11.6051 4.97128 11.6051 5.26939V5.48897H1.39488V5.26939ZM12.2397 9.23711C12.2397 9.28723 12.199 9.32801 12.1488 9.32801H0.85117C0.801049 9.32801 0.760246 9.28723 0.760246 9.23711V6.34017C0.760246 6.29004 0.801023 6.24927 0.85117 6.24927H12.1488C12.199 6.24927 12.2398 6.29004 12.2398 6.34017V9.23711H12.2397Z"
                          fill="black"
                        />
                      </svg>
                    </div>
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
