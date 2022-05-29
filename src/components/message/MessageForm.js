import React from 'react';
import '../AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import axios from '../api/axios';
import { useParams } from 'react-router-dom';
import { render } from '@testing-library/react';

function MessageForm() {
    const [idReceiver, setIdReceiver] = useState(17); //TODO mettre l'id du propriétaire de la maison pour laquelle on evnoit le message
    const [idSender, setIdSender] = useState(3); //TODO mettre l'id de la session
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
          <h4>Nouveau Message</h4>
          <form onSubmit={HandleSubmit}>
            <label htmlFor="startDate">Text</label>
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
