import React from 'react';
import Profile from '../Profile';
import '../Profile.css';

function Account(props) {
  return (
    <div>
      <Profile
        setConnectedUser={(connectedUser) =>
          props.setConnectedUser(connectedUser)
        }
        connectedUser={props.connectedUser}
        setConnectedId={(connectedId) => props.setConnectedId(connectedId)}
        connectedId={props.connectedId}
        setSuccess={(success) => props.setSuccess(success)}
        success={props.success}
      />
    </div>
  );
}

export default Account;
