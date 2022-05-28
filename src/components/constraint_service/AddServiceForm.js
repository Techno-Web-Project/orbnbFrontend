import React from 'react';
import '../AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import axios from '../api/axios';

function AddServiceForm(){
    const [service, setService] = useState(-1);
    const [housingId, setHousingId] = useState(5); //TODO Ajouter l'id du housing sur lequel on est
    const [services, setServices] = useState([]);
    useEffect(() => {
    axios
      .get('http://localhost:8081/serviceApi/getAllServices')
      .then((res) => {
        console.log(res);
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

    const HandleSubmit = async (e) => {
        e.preventDefault();
        if(service!=-1){
            await axios
            .put(
            `http://localhost:8081/housingApi/assignservice/${housingId}/${service}`
            )
            .then((res) => {
            console.log(res);
            console.log(service);
            })
            .catch((error) => {
            console.log(error);
            });
        }
        
    };

return (
    <div className="Register">
      <section>
        <h1>Ajouter des services à mon logement</h1>
        <form onSubmit={HandleSubmit}>
        <label htmlFor="service">Services</label>
          <select
            onChange={(e) => setService(e.target.value)}
            value={service}
            required
            id="service"
            type="text"
          >
              <option value='-1'>Service</option>
          
        {services.map((service) => (
            <option value= {service.serviceId}>{service.description}</option>
        ))}
        </select>
        <button className="formButton">Ajouter</button>
        </form>
        </section>
    </div>
      );
      
}

export default AddServiceForm;