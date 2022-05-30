import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Button.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Profile(props) {
  const [person, setPerson] = useState('');
  const { register, handleSubmit } = useForm();
  const [pictureId, setPictureId] = useState('');

  const onSubmit = async (data) => {
    console.log(data);
    // await axios
    //     .post('http://localhost:8081/pictureApi/addPicture', {
    //       title: 'Photo de profil',
    //       fileLocalisation: data.picture[0].name,
    //     })
    //     .then((res) => {
    //       setPictureId(res.data)
    //     })
    //   await axios
    //     .put(
    //       `http://localhost:8081/housingApi/assignPictureToHousing/${housingId}/${pictureId}`
    //     )
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/personApi/getPersonByLogin/${props.connectedUser}`
      )
      .then((res) => {
        console.log(res);
        setPerson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogout = (e) => {
    props.setSuccess(false);
    props.setConnectedUser(null);
    props.setConnectedId(null);
    console.log('not connected');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile-div">
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
          {...register('picture')}
        />
      </label>
      <button className="savePhoto">Enregistrer la photo</button>
      <div className="profileTextDiv">
        <h2 className="profileText">{person.firstName}</h2>
        <h2 className="profileText">{person.lastName}</h2>
        <h2 className="profileText">{person.login}</h2>
        <h2 className="profileText">{person.phoneNumber}</h2>
        <h2 className="profileText">{person.email}</h2>
        <h2 className="profileText">{person.password}</h2>
      </div>
      <Link
        to="/connexion"
        onClick={handleLogout}
        className="baseButton plainButton logoutButton"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 46 46"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_87_147)">
            <path d="M32.6433 43.8438C32.6433 44.4156 32.4162 44.9641 32.0118 45.3684C31.6074 45.7728 31.059 46 30.4871 46H10.1597C8.25408 45.9979 6.42716 45.2399 5.0797 43.8925C3.73225 42.545 2.97431 40.7181 2.97217 38.8125V7.1875C2.97431 5.28191 3.73225 3.45499 5.0797 2.10753C6.42716 0.76008 8.25408 0.00214018 10.1597 0L30.4871 0C31.059 0 31.6074 0.227176 32.0118 0.631551C32.4162 1.03593 32.6433 1.58438 32.6433 2.15625C32.6433 2.72812 32.4162 3.27657 32.0118 3.68095C31.6074 4.08532 31.059 4.3125 30.4871 4.3125H10.1597C9.39743 4.31333 8.66664 4.6165 8.12766 5.15549C7.58867 5.69447 7.2855 6.42526 7.28467 7.1875V38.8125C7.28548 39.5747 7.58864 40.3055 8.12763 40.8445C8.66662 41.3835 9.39742 41.6867 10.1597 41.6875H30.4871C31.059 41.6875 31.6074 41.9147 32.0118 42.3191C32.4162 42.7234 32.6433 43.2719 32.6433 43.8438ZM42.3961 21.4754L32.1494 11.2285C31.95 11.0246 31.7121 10.8623 31.4495 10.751C31.187 10.6396 30.9049 10.5815 30.6197 10.5799C30.3345 10.5783 30.0519 10.6333 29.7881 10.7418C29.5243 10.8502 29.2847 11.0098 29.083 11.2115C28.8814 11.4132 28.7217 11.6529 28.6133 11.9167C28.5049 12.1805 28.45 12.4631 28.4516 12.7483C28.4532 13.0335 28.5114 13.3155 28.6227 13.5781C28.7341 13.8406 28.8964 14.0785 29.1003 14.2779L35.6659 20.8438H18.6911C18.1193 20.8438 17.5708 21.0709 17.1664 21.4753C16.7621 21.8797 16.5349 22.4281 16.5349 23C16.5349 23.5719 16.7621 24.1203 17.1664 24.5247C17.5708 24.9291 18.1193 25.1562 18.6911 25.1562H35.6658L29.1 31.722C28.8989 31.9221 28.7392 32.1598 28.6301 32.4216C28.521 32.6835 28.4647 32.9643 28.4643 33.2479C28.4639 33.5316 28.5195 33.8125 28.6279 34.0747C28.7362 34.3368 28.8953 34.575 29.0958 34.7756C29.2964 34.9761 29.5346 35.1352 29.7967 35.2435C30.0589 35.3519 30.3398 35.4075 30.6235 35.4071C30.9071 35.4067 31.1879 35.3504 31.4498 35.2413C31.7116 35.1322 31.9493 34.9725 32.1494 34.7714L42.3961 24.5247C42.8005 24.1204 43.0277 23.5719 43.0277 23C43.0277 22.4282 42.8005 21.8797 42.3961 21.4754Z" />
          </g>
          <defs>
            <clipPath id="clip0_87_147">
              <rect width="46" height="46" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Déconnexion
      </Link>
    </form>
  );
}

export default Profile;
