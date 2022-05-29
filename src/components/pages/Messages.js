import React from 'react';
import MessagesSendList from '../message/MessagesSendList';
import MessagesReceivedList from '../message/MessagesReceivedList';



function Messages() {
  return (
    <>
      <MessagesSendList />
      <MessagesReceivedList />
    </>
  );
}

export default Messages;