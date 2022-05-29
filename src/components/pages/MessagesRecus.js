import React from 'react';
import MessageForm from '../MessageForm';
import MessagesSendList from '../MessagesSendList';
import '../DetailHousePage.css';
import MessagesReceivedList from '../MessagesReceivedList';

function MessagesRecus(props) {
  const connectedId = props.connectedId;
  return (
    <div className="messagePage">
      <div className="messageDiv">
        <div className="messageRecus">
          <MessagesReceivedList connectedId={connectedId} />
        </div>
      </div>
    </div>
  );
}

export default MessagesRecus;
