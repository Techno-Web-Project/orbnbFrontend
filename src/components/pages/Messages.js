import React from 'react';
import MessagesSendList from '../MessagesSendList';
import MessagesReceivedList from '../MessagesReceivedList';
import MessageForm from '../MessageForm';

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
