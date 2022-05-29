import React from 'react';
import '../../App.css';
import Login from '../Login';
import Register from '../Register';

function Connexion(props) {
  let connectedUser = props.connectedUser;
  let connectedId = props.connectedId;

  return (
    <>
      <Login
        setConnectedUser={(connectedUser) =>
          props.setConnectedUser(connectedUser)
        }
        setConnectedId={(connectedId) => props.setConnectedId(connectedId)}
        connectedUser={connectedUser}
        connectedId={connectedId}
        setSuccess={(success) => props.setSuccess(success)}
        success={props.success}
      />
    </>
  );
}

export default Connexion;
