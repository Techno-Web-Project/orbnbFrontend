import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './DetailHousePage.css';

function HouseImage(props) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (props.house.housingPictures && props.house.housingPictures.length > 0) {
      let images = [];

      props.house.housingPictures &&
        props.house.housingPictures.map((item) => {
          images.push({
            url: `/images/${item.fileLocalisation}`,
            caption: `/images:${item.fileLocalisation}`,
          });
        });
      setImages(images);
    }
  }, [props.house.housingPictures]);

  console.log(Images);

  const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };

  return (
    <div className="slide-container">
      <Slide {...proprietes}>
        {Images.map((Images, index) => (
          <div className="each-slide" key={index}>
            <img src={Images.url} alt="test" />
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default HouseImage;
