import React from 'react';
import './AddHouse.css';
import { useState } from 'react';
import axios from './api/axios';

function MessageForm(props) {
  const idReceiver = props.personId;
  const idSender = props.connectedId;
  const [text, setText] = useState('');
  let idMessage = -1;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const current = new Date();
    let month = current.getMonth() + 1;
    if (month <= 9) {
      month = `0${month}`;
    }
    const messageDate = `${current.getFullYear()}-${month}-${current.getDate()}`;
    console.log(idReceiver);
    console.log(idSender);
    await axios
      .post('http://localhost:8081/messageApi/addMessage', {
        text: text,
        date: messageDate,
        idReceiver: idReceiver,
        idSender: idSender,
      })
      .then((res) => {
        console.log(res.data.messageId);
        idMessage = res.data.messageId;
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .put(
        `http://localhost:8081/personApi/assignMessageToPerson/${idMessage}/${idSender}`
      )
      .then((res) => {
        console.log(res);
        console.log(idSender);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .put(
        `http://localhost:8081/personApi/assignMessageReceivedToPerson/${idMessage}/${idReceiver}`
      )
      .then((res) => {
        console.log(res);
        console.log(idReceiver);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          id="text"
          autoComplete="off"
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        />
        <button className="formButton">Envoyer</button>
      </form>
    </div>
  );
}

export default MessageForm;
