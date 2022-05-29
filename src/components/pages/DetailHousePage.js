import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../DetailHousePage.css';
import HouseImage from '../HouseImage';
import ReservationForm from '../ReservationForm';
import MessagesSendList from '../MessagesSendList';
import MessagesReceivedList from '../MessagesReceivedList';
import MessageForm from '../MessageForm';

function DetailHousePage(props) {
  const [house, setHouse] = useState('');
  const [person, setPerson] = useState('');
  const params = useParams();
  const houseId = params.id;
  const [personId, setPersonId] = useState('');
  let rating = 4;
  const connectedUser = props.connectedUser;
  const connectedId = props.connectedId;
  let isOwnerHouse = false;
  const [housingType, setHousingType] = useState(house.housingType);
  const [description, setDescription] = useState(house.description);
  const [street, setStreet] = useState(house.street);
  const [postalCode, setPostalCode] = useState(house.postalCode);
  const [city, setCity] = useState(house.city);
  const [country, setCountry] = useState(house.country);

  const [beds, setBeds] = useState(house.numberOfBed);

  console.log(houseId);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/housingApi/getHousingById/${houseId}`)
      .then((res) => {
        console.log(res);
        setHouse(res.data);
        setPersonId(res.data.personId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/personApi/getPersonById/${personId}`)
      .then((res) => {
        console.log(res);
        setPerson(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [personId]);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put('http://localhost:8081/housingApi/updateHousing', {
        id: house.id,
        description: description ?? house.description,
        street: street ?? house.street,
        city: city ?? house.city,
        country: country ?? house.country,
        postalCode: postalCode ?? house.postalCode,
        validate: house.validate,
        housingType: housingType ?? house.housingType,
        numberOfBed: beds ?? house.numberOfBed,
        personId: connectedId,
        housingPictures: house.housingPictures,
        bookings: house.bookings,
        customServices: house.customServices,
        customConstraints: house.customConstraints,
        housingRates: house.housingRates,
        linkedServices: house.linkedServices,
        linkedConstraints: house.linkedConstraints,
      })
      .then((res) => {
        console.log(res);
      });
  };

  if (connectedId === personId && connectedId != null) {
    isOwnerHouse = true;
  } else {
    isOwnerHouse = false;
  }

  const thumbnail = house.housingPictures?.[0]
    ? `/images/${house.housingPictures[0].fileLocalisation}`
    : '/images/img-home-thumbnail.jpg';

  return (
    <div className="detailedHouse">
      <div className="houseImage">
        <img src={thumbnail} alt="" />
      </div>
      <div className="houseDetails">
        <form className="infoHouse" onSubmit={HandleSubmit}>
          {isOwnerHouse && (
            <input
              className="infoHouse-h1"
              type="text"
              id="description"
              autoComplete="off"
              placeholder={house.description}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          )}
          {!isOwnerHouse && <h1>{house.description}</h1>}
          <h2>
            de {person.firstName ?? 'Anonyme'} {person.lastName}
          </h2>
          {isOwnerHouse && (
            <h4>
              <input
                className="infoHouse-h4"
                type="text"
                id="street"
                autoComplete="off"
                placeholder={house.street}
                onChange={(e) => setStreet(e.target.value)}
                value={street}
              />
              ,{' '}
              <input
                className="infoHouse-h4"
                type="text"
                id="postalCode"
                autoComplete="off"
                placeholder={house.postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                value={postalCode}
              />
            </h4>
          )}
          {!isOwnerHouse && (
            <h4>
              {house.street}, {house.postalCode}
            </h4>
          )}
          {isOwnerHouse && (
            <h4>
              <input
                className="infoHouse-h3"
                type="text"
                id="country"
                autoComplete="off"
                placeholder={house.country}
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              />
              <input
                className="infoHouse-h3"
                type="text"
                id="city"
                autoComplete="off"
                placeholder={house.city}
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </h4>
          )}
          {!isOwnerHouse && (
            <h4>
              {house.city}, {house.country}
            </h4>
          )}

          {isOwnerHouse && (
            <h4>
              Type de logement :{' '}
              <select
                className="infoHouse-select"
                type="text"
                id="housingType"
                onChange={(e) => setHousingType(e.target.value)}
                value={housingType}
              >
                <option value="HOUSE">Maison</option>
                <option value="APARTMENT">Appartement</option>
                <option value="ROOM">Chambre</option>
              </select>
            </h4>
          )}

          <div className="stars">
            {Array(rating)
              .fill()
              .map((_) => (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 14 13"
                  fill="#FFC700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" />
                </svg>
              ))}
          </div>

          <h3>
            {isOwnerHouse && (
              <input
                className="infoHouse-number"
                type="number"
                id="description"
                autoComplete="off"
                placeholder={house.numberOfBed}
                onChange={(e) => setBeds(e.target.value)}
                value={beds}
              />
            )}
            {!isOwnerHouse && <span>{house.numberOfBed} </span>}
            <svg
              width="30"
              height="30"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3654 5.517V5.26942C12.3654 4.81333 12.1292 4.41157 11.773 4.17925V1.4785C11.773 0.767913 11.1949 0.189819 10.4843 0.189819H2.51568C1.8051 0.189819 1.22698 0.767913 1.22698 1.4785V4.17922C0.870746 4.41154 0.634613 4.8133 0.634613 5.26939V5.51698C0.269852 5.61303 0 5.94565 0 6.34017V9.23713C0 9.6929 0.36009 10.0661 0.810697 10.0873V10.4301C0.810697 10.64 0.980891 10.8102 1.19082 10.8102C1.40075 10.8102 1.57094 10.64 1.57094 10.4301V10.0883H11.429V10.4301C11.429 10.64 11.5992 10.8102 11.8092 10.8102C12.0191 10.8102 12.1893 10.64 12.1893 10.4301V10.0873C12.6399 10.066 13 9.69287 13 9.23711V6.34017C13 5.94562 12.7301 5.61303 12.3654 5.517V5.517ZM1.98725 1.4785C1.98725 1.18711 2.22429 0.950066 2.51568 0.950066H10.4843C10.7757 0.950066 11.0128 1.18711 11.0128 1.4785V3.96848H10.5059V3.29847C10.5059 2.82951 10.1244 2.44796 9.65539 2.44796H7.60998C7.14101 2.44796 6.75947 2.82951 6.75947 3.29847V3.96848H6.24053V3.29847C6.24053 2.82951 5.85899 2.44796 5.39002 2.44796H3.34461C2.87562 2.44796 2.4941 2.82951 2.4941 3.29847V3.96848H1.98725V1.4785ZM9.74563 3.29844V3.87821C9.74563 3.92798 9.70513 3.96845 9.65539 3.96845H7.60998C7.56021 3.96845 7.51974 3.92795 7.51974 3.87821V3.29844C7.51974 3.24868 7.56024 3.20821 7.60998 3.20821H9.65539C9.70516 3.20821 9.74563 3.24868 9.74563 3.29844ZM5.48026 3.29844V3.87821C5.48026 3.92798 5.43976 3.96845 5.39002 3.96845H3.34461C3.29484 3.96845 3.25437 3.92795 3.25437 3.87821V3.29844C3.25437 3.24868 3.29487 3.20821 3.34461 3.20821H5.39002C5.43976 3.20821 5.48026 3.24868 5.48026 3.29844V3.29844ZM1.39488 5.26939C1.39488 4.97126 1.63744 4.72872 1.93558 4.72872H11.0644C11.3626 4.72872 11.6051 4.97128 11.6051 5.26939V5.48897H1.39488V5.26939ZM12.2397 9.23711C12.2397 9.28723 12.199 9.32801 12.1488 9.32801H0.85117C0.801049 9.32801 0.760246 9.28723 0.760246 9.23711V6.34017C0.760246 6.29004 0.801023 6.24927 0.85117 6.24927H12.1488C12.199 6.24927 12.2398 6.29004 12.2398 6.34017V9.23711H12.2397Z"
                fill="black"
              />
            </svg>
          </h3>

          {isOwnerHouse && (
            <button className="baseButton plainButton leftSaveButton">
              Sauvegarder
            </button>
          )}

          {connectedUser != null && connectedId != personId && (
            <ReservationForm connectedId={connectedId} />
          )}
        </form>

        <HouseImage house={house} />
      </div>
      {connectedUser != null && connectedId != personId && personId != null && (
        <div className="messageDiv">
          <div className="messageRecus">
            <MessagesSendList connectedId={connectedId} />
          </div>
          <MessageForm personId={personId} connectedId={connectedId} />
        </div>
      )}
    </div>
  );
}

export default DetailHousePage;
