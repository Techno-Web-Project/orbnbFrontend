import { useState, useEffect, useContext } from 'react';
import './Register.css';
import './Button.css';

import axios from './api/axios';

function Login() {
  const [person, setPerson] = useState('');

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [success, setSuccess] = useState(false);
  let verified = 'false';

  const HandleSubmit = async (e) => {
    useEffect(() => {
      const getData = async () => {
        const data = await axios.get(
          `http://localhost:8081/personApi/getPersonByLogin/${user}`
        );
        setPerson(data);
      };
    }, '');

    if (person.password == pwd) {
      setSuccess(true);
    }
  };

  console.log(person.password);
  console.log(pwd);
  console.log(user);

  let successString = 'no value';

  if (success == true) {
    successString = 'true';
  } else {
    successString = 'false';
  }

  return (
    <div className="Register">
      <h1>{successString}</h1>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
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
