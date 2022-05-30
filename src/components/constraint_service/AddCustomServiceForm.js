import React from 'react';
import '../AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import axios from '../api/axios';

function AddCustomServiceForm() {
  const [description, setDescription] = useState('');
  const params = useParams();
  const housingId = params.id;
  let customServiceId = 0;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:8081/customServiceApi/addCustomService', {
        description: description,
        linkedHousingId: housingId,
      })
      .then((res) => {
        console.log(res.data.customServiceId);
        customServiceId = res.data.customServiceId;
      })
      .catch((error) => {
        console.log(error);
      });
    await axios
      .put(
        `http://localhost:8081/housingApi/assignCustomServiceToHousing/${housingId}/${customServiceId}`
      )
      .then((res) => {
        console.log(res);
        console.log(housingId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="serviceDiv">
      <svg
        width="98"
        height="98"
        viewBox="0 0 98 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M93.8164 3.30279L93.6984 3.19521C91.4428 1.13483 88.5189 0 85.4653 0C82.042 0 78.7552 1.44915 76.4474 3.97554L32.8097 51.75C32.412 52.1854 32.1103 52.6991 31.9238 53.2584L26.7926 68.6409C26.1994 70.4193 26.4971 72.3861 27.5889 73.9018C28.6895 75.4294 30.4625 76.3414 32.3322 76.3414H32.3325C33.1412 76.3414 33.9316 76.1751 34.6813 75.847L49.538 69.3476C50.0781 69.1114 50.5627 68.7645 50.9602 68.3291L94.5981 20.5549C99.1391 15.5839 98.7888 7.84518 93.8164 3.30279ZM36.6237 65.7993L39.6347 56.773L39.8886 56.4949L45.5953 61.7072L45.3414 61.9853L36.6237 65.7993ZM88.3762 14.8715L51.2787 55.4856L45.572 50.2733L82.6695 9.65893C83.3951 8.86456 84.3881 8.42692 85.4656 8.42692C86.4108 8.42692 87.3161 8.7786 88.0167 9.41849L88.1344 9.52607C89.6748 10.9331 89.7833 13.3311 88.3762 14.8715Z"
          fill="#FD5A52"
        />
        <path
          d="M85.3507 38.8729C83.0237 38.8729 81.1372 40.7594 81.1372 43.0863V78.8577C81.1372 84.7661 76.3302 89.5731 70.4218 89.5731H19.355C13.4463 89.5731 8.63957 84.7661 8.63957 78.8577V28.2058C8.63957 22.2974 13.4466 17.4904 19.355 17.4904H56.3174C58.6443 17.4904 60.5308 15.6039 60.5308 13.2769C60.5308 10.95 58.6443 9.06348 56.3174 9.06348H19.355C8.79968 9.06348 0.212646 17.6508 0.212646 28.2058V78.8575C0.212646 89.4125 8.79996 97.9998 19.355 97.9998H70.4215C80.9765 97.9998 89.5638 89.4125 89.5638 78.8575V43.0863C89.5641 40.7594 87.6776 38.8729 85.3507 38.8729Z"
          fill="#FD5A52"
        />
      </svg>

      <h1>Ajouter des services personnalisés à mon logement</h1>
      <form className="form" onSubmit={HandleSubmit}>
        <input
          type="text"
          id="description"
          autoComplete="off"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <button className="baseButton plainButton">Valider</button>
      </form>
    </div>
  );
}
export default AddCustomServiceForm;
