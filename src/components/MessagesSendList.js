import React from 'react';
import './AddHouse.css';
import { useState, useEffect } from 'react';
import axios from './api/axios';
import './DetailHousePage.css';

function MessagesSendList(props) {
  const idSender = props.connectedId;
  const [messagesSend, setMessagesSend] = useState([]);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/messageApi/getMessagesByIdSender/${idSender}`)
      .then((res) => {
        console.log(res);
        setMessagesSend(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:8081/personApi/getAllPersons`)
      .then((res) => {
        console.log(res);
        setPersons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="message-h1" align="center">
        Messages Envoyés
      </h1>
      <ul className="receivedList">
        {messagesSend.map((message) => (
          <li className="messageContainer" key={message.messageId}>
            <h3> le {message.date} </h3>
            <h2 className="message">{message.text}</h2>
            <h4>
              {persons.map(
                (person) =>
                  person.id == message.idSender && (
                    <span>
                      {person.firstName} {person.lastName}
                    </span>
                  )
              )}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessagesSendList;
