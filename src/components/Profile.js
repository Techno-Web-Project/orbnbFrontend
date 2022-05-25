import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Button.css';

function Profile() {
  const [person, setPerson] = useState('');
  const id = 1;

  //const dispatch = useDispatch()
  //const [imagePreview, setImagePreview] = useState(null)
  //const [imageData, setImageData] = useState(null)
  //const {image} = useSelector(state => state.upload)

  useEffect(() => {
    axios
      .get(`http://localhost:8081/personApi/getPersonById/${id}`)
      .then((res) => {
        console.log(res);
        setPerson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, '');

  return (
    <div className="profile-div">
      <h1 align="center">Profile</h1>
      <img
        className="profile-pic"
        src="images/profile-pic-test.png"
        alt="Profile"
      />
      <label for="inputTag" className="uploadInput">
        <svg
          width="19"
          height="19"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5862 3.69507L1.48148 15.8007C1.42058 15.8617 1.37661 15.9389 1.35567 16.0217L0.0139751 21.407C-0.0261588 21.5691 0.0214784 21.7415 0.139786 21.8598C0.229302 21.9493 0.351274 21.9989 0.476038 21.9989C0.514252 21.9989 0.553339 21.9942 0.591379 21.9846L5.97664 20.6427C6.06058 20.6218 6.13683 20.578 6.19773 20.5171L18.3035 8.41236L13.5862 3.69507Z"
            fill="white"
          />
          <path
            d="M21.3022 2.04452L19.9548 0.697072C19.0542 -0.203497 17.4846 -0.202624 16.5851 0.697072L14.9346 2.34762L19.6517 7.06474L21.3022 5.41419C21.7521 4.96452 21.9999 4.366 21.9999 3.72944C21.9999 3.09289 21.7521 2.49437 21.3022 2.04452Z"
            fill="white"
          />
        </svg>
        <input
          id="inputTag"
          accept="image/*"
          type="file"
          className="uploadFile"
        />
      </label>
      <div className="profileTextDiv">
        <h2 className="profileText">{person.firstName}</h2>
        <h2 className="profileText">{person.lastName}</h2>
        <h2 className="profileText">{person.login}</h2>
        <h2 className="profileText">{person.phoneNumber}</h2>
        <h2 className="profileText">{person.email}</h2>
        <h2 className="profileText">{person.password}</h2>
      </div>

      <button className="profileButton formButton">Enregistrer</button>
    </div>
  );
}

export default Profile;
