import React from 'react';
import './Footer.css';

function Footer() {
  return <div className="footerDiv">
    <div>
      <h3>Nous contacter</h3><br></br>
      04.75.68.23.14<br></br>
      contact@orbnb.fr
      </div>
    <div><h3>Nous retrouver</h3><br></br>
      <img class="logoFooter" src = "images\logo_facebook.png"></img>  <p class="pFooter">Orbnb</p><br></br><br></br>
      <img class="logoFooter" src = "images\logo_instagram.png"></img> <p class="pFooter">@orbnb_official</p><br></br><br></br>
      <img class="logoFooter" src = "images\logo_twitter.png"></img> <p class="pFooter">@orbnb</p><br></br><br></br>
    </div>

  </div>;
}

export default Footer;
