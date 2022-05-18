import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1 className='decouvrezLogements'>Découvrez ces Logements</h1>
        <div className="cards__container">
            <div className="card__wrapper">
                <ul className='cards__items'>
                    <CardItem 
                    src="images/img-home.jpg"
                    text="Découvrez cette magnifique propriété située dans le centre de Sydney"
                    label='Maison'
                    path='/Reservations'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;