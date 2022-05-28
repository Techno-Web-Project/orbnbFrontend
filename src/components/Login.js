import { useState, useEffect, useContext } from 'react';
import './Register.css';
import './Button.css';

import axios from './api/axios';

function Login(props) {
  const [person, setPerson] = useState('');

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [success, setSuccess] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8081/personApi/getPersonByLogin/${user}`)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
      });
    if (person.password == pwd && person.login == user) {
      console.log('connected');
      setSuccess(true);
      props.setConnectedUser(person.login);
      props.setConnectedId(person.id);
    } else {
      console.log('not connected');
      props.setConnectedUser(null);
      props.setConnectedId(null);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setSuccess(false);
    props.setConnectedUser(null);
    props.setConnectedId(null);
    console.log('not connected');
  };

  return (
    <div className="Register">
      {success || props.connectedUser != null ? (
        <section className="logout">
          <h1>You are logged in!</h1>
          <br />
          <p>
            <button
              href="#"
              onClick={handleLogout}
              className="profileButton formButton logoutButton"
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
              Logout
            </button>
          </p>
        </section>
      ) : (
        <section>
          <h1>Connecte-toi</h1>
          <form onSubmit={HandleSubmit}>
            <label htmlFor="username">Login</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className="formButton">Connexion</button>
          </form>
          <p>
            Pas de compte ?<br />
            <span className="line">
              <a href="/inscription">Inscription</a>
            </span>
          </p>
        </section>
      )}
    </div>
  );
}

export default Login;
