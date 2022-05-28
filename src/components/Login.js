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
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
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
