import React from 'react';
import '../AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import axios from '../api/axios';
import { useParams } from 'react-router-dom';
import { render } from '@testing-library/react';

function MessagesSendList() {
    const [idSender, setIdSender] = useState(17); //TODO mettre l'id de la session
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
        <h1 align="center">Messages Envoyés</h1>
        <ul>
          {messagesSend.map((message) => (
            <div className="houseDiv">
              <li key={message.messageId}>
                <div className="houseOfCard">
                  <h3>{message.text} le {message.date}
                  {persons.map((person) => (
                    person.id == message.idSender &&
                    <span> de : {person.firstName} {person.lastName}</span>
                  ))}
                  </h3>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
}

export default MessagesSendList;
