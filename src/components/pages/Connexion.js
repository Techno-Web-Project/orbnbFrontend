import React from 'react';
import '../../App.css';
import Login from '../Login';
import Register from '../Register';

function Connexion(props) {
  let connectedUser = props.connectedUser;
  return (
    <>
      <Login
        setConnectedUser={(connectedUser) =>
          props.setConnectedUser(connectedUser)
        }
        connectedUser={connectedUser}
      />
    </>
  );
}

export default Connexion;
