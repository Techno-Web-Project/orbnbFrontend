import React from 'react';
import Profile from '../Profile';
import '../Profile.css';

function Account(props) {
  return (
    <div>
      <Profile connectedUser={props.connectedUser} />
    </div>
  );
}

export default Account;
