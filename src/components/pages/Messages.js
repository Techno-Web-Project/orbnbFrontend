import React from 'react';
import MessagesSendList from '../message/MessagesSendList';
import MessagesReceivedList from '../message/MessagesReceivedList';
import MessageForm from '../message/MessageForm';


function Messages() {
  return (
    <>
      <MessagesSendList />
      <MessagesReceivedList />
      <MessageForm />
    </>
  );
}

export default Messages;