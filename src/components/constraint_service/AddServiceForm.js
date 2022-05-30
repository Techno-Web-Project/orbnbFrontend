import React from 'react';
import '../AddHouse.css';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import axios from '../api/axios';

function AddServiceForm() {
  const [service, setService] = useState(-1);
  const params = useParams();
  const housingId = params.id;
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
    if (service != -1) {
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
    <div className="serviceDiv">
      <svg
        width="85"
        height="85"
        viewBox="0 0 85 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_95_145)">
          <path
            d="M82.3411 41.9336C79.4991 39.5913 75.007 39.3904 72.0588 42.5545L64.7396 50.4115C63.7933 47.3703 60.953 45.1558 57.6048 45.1558H44.5435C43.5524 45.1558 43.2205 44.7773 41.4989 43.451C34.935 37.7288 25.076 37.747 18.532 43.5058L13.7312 47.7322C11.5731 46.59 9.05317 46.5618 6.88334 47.6459L1.37693 50.3982C0.146759 51.0142 -0.351122 52.5098 0.26297 53.74L15.2035 83.621C15.8195 84.8511 17.3151 85.349 18.5453 84.7349L24.0517 81.9809C26.7659 80.6247 28.2764 77.8556 28.1785 75.037H57.6046C63.0612 75.037 68.2754 72.4307 71.5491 68.0648L83.5032 52.125C85.8223 49.0354 85.4554 44.505 82.3411 41.9336ZM21.8237 77.5269L18.5451 79.1669L5.8308 53.74L9.1111 52.0999C10.3413 51.4857 11.8353 51.982 12.4512 53.2139L22.9377 74.187C23.552 75.417 23.0539 76.9109 21.8237 77.5269ZM79.519 49.1367L67.565 65.0765C65.226 68.1958 61.5025 70.0567 57.6048 70.0567H26.4405L17.1092 51.3927L21.8221 47.2443C26.5117 43.119 33.5836 43.119 38.2732 47.2443C41.0356 49.6762 42.7537 50.1361 44.5433 50.1361H57.6046C58.9775 50.1361 60.0947 51.2534 60.0947 52.6262C60.0947 53.999 58.9774 55.1162 57.6046 55.1162H44.887C43.5124 55.1162 42.3969 56.2319 42.3969 57.6063C42.3969 58.9808 43.5125 60.0964 44.887 60.0964H59.2731C61.3398 60.0964 63.332 59.2298 64.7396 57.7175L75.7026 45.9494C76.7054 44.8736 78.2425 44.9632 79.1855 45.7883C80.1714 46.6514 80.2778 48.1273 79.519 49.1367Z"
            fill="#FD5951"
          />
          <path
            d="M52.3589 16.9946C54.0637 15.2067 55.1146 12.7897 55.1146 10.1285C55.1146 4.64698 50.6856 0.00219727 45.1543 0.00219727C39.6645 0.00219727 35.028 4.63868 35.028 10.1285C35.028 12.7082 36.039 15.1435 37.875 17.0145C33.3215 19.5676 30.0479 24.4681 30.0479 30.2152V32.7053C30.0479 34.0797 31.1635 35.1954 32.5379 35.1954H57.6048C58.9792 35.1954 60.0949 34.0797 60.0949 32.7053V30.2152C60.0947 24.581 56.9957 19.6042 52.3589 16.9946ZM45.1543 4.9825C47.8535 4.9825 50.1344 7.33976 50.1344 10.1287C50.1344 12.8744 47.9 15.1088 45.1543 15.1088C42.3654 15.1088 40.0081 12.8279 40.0081 10.1287C40.0081 7.3879 42.4135 4.9825 45.1543 4.9825ZM35.028 30.2152C35.028 24.7254 39.6645 20.0889 45.1543 20.0889C50.6457 20.0889 55.1146 24.6308 55.1146 30.2152H35.028Z"
            fill="#FD5951"
          />
        </g>
        <defs>
          <clipPath id="clip0_95_145">
            <rect width="85" height="85" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <h1>Ajouter des services à mon logement</h1>
      <form onSubmit={HandleSubmit}>
        <select
          onChange={(e) => setService(e.target.value)}
          value={service}
          required
          id="service"
          type="text"
        >
          <option value="-1">Service</option>

          {services.map((service) => (
            <option value={service.serviceId}>{service.description}</option>
          ))}
        </select>
        <button className="baseButton plainButton">Ajouter</button>
      </form>
    </div>
  );
}

export default AddServiceForm;
