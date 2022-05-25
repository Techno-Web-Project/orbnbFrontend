import React from 'react';
import './PromotionalCards.css';

function PromotionalCards() {
  return (
    <div className="promotionalCards">
      <div className="splitCards">
        <div className="splitTextCards">
          <h1 className="explorerText">Des logements uniques</h1>
          <button className="explorerButton">Explorer</button>
        </div>
        <img src="images/cartes-orbnb.png" alt="Orbnb Cards" />
      </div>
    </div>
  );
}

export default PromotionalCards;
