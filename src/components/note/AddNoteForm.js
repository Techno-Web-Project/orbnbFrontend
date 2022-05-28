import React from 'react';
import '../AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import axios from '../api/axios';
import moment from "moment";
import { Rating } from'react-simple-star-rating'

function AddNoteForm() {
    const [comment, setComment] = useState('');
    const [notedHousingId, setNotedHousingId] = useState(5); //TODO mettre l'id du housing sur lequel on est
    const [date, setDate] = useState();
    const [rating, setRating] = useState(100)

    let housingRateId = 0;

         // initial rating value
      
        // Catch Rating value
        const handleRating = (rate) => {
          console.log(rate)
          setRating(rate)
          // other logic
        }


    const HandleSubmit = async (e) => {
        e.preventDefault();
        setDate(moment().format("DD-MM-YYYY hh:mm:ss"));//TODO revoir le format de la date
        console.log(date);
        await axios
          .post('http://localhost:8081/housingRateApi/addHousingRate', {
            rate: rating/20,
            comment: comment,
            notedHousingId: notedHousingId,
            ratingDate: date,
          })
          .then((res) => {
            console.log(res.data.housingRateId);
            housingRateId = res.data.housingRateId;
          })
          .catch((error) => {
            console.log(error);
          });
          //TODO Faire le assign housingRate to Housing
        /*await axios
          .put(
            `http://localhost:8081/housingApi/assignHousing/${housingRateId}/${notedHousingId}`
          )
          .then((res) => {
            console.log(res);
            console.log(housingRateId);
          })
          .catch((error) => {
            console.log(error);
          });*/
      };

        return (
            <div className="Register">
                <section>
                    <h1>Ajouter une note à un logement</h1>
                    <form onSubmit={HandleSubmit}>
                        <Rating
                            tooltipArray={['nul', 'bof', 'moyen', 'top', 'génial']}
                            transition
                            showTooltip
                            onClick={handleRating}
                            ratingValue={rating} /* Available Props */
                        />
                        <label htmlFor="comment">Commentaire</label>
                        <input
                            type="text"
                            id="comment"
                            autoComplete="off"
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                            required
                        />
                        <button className="formButton">Valider</button>
                    </form>
                    
                </section>
                
            </div>
        );
}
export default AddNoteForm;