import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleclick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []); //pour ne pas afficher le bouton connexion en mode mobile quand on réduit puis rafraichit la page

  window.addEventListener('resize', showButton);

  let connected = true;

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <svg
              width="165"
              height="34"
              viewBox="0 0 165 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.4892 8.84723L19.7403 1.55883C17.2486 -0.51961 13.6494 -0.51961 11.1853 1.55883L2.40871 8.84723C0.885962 10.122 0 12.0065 0 14.0018V26.3061C0 28.1074 0.692158 29.7702 1.96573 31.045C3.2393 32.3198 4.90048 33.0126 6.70009 33.0126H24.1978C25.9975 33.0126 27.6586 32.3198 28.9322 31.045C30.2058 29.7702 30.8979 28.1074 30.8979 26.3061V14.0018C30.8979 12.0065 30.012 10.122 28.4892 8.84723ZM29.0706 26.3061C29.0706 28.9942 26.8834 31.1835 24.1978 31.1835H6.70009C4.01452 31.1835 1.8273 28.9942 1.8273 26.3061V14.0018C1.8273 12.5607 2.46408 11.1751 3.57154 10.2606L12.3204 2.94446C13.2341 2.19622 14.3415 1.80824 15.449 1.80824C16.5564 1.80824 17.6639 2.19622 18.5775 2.94446L27.3264 10.2329C28.4338 11.1751 29.0706 12.533 29.0706 13.9741V26.3061Z"
                fill="#FD5454"
              />
              <path
                d="M21.2631 15.9139H11.8498L12.9018 14.8609C13.2618 14.5006 13.2618 13.9186 12.9018 13.5861C12.5419 13.2258 11.9605 13.2258 11.6283 13.5861L9.02575 16.1911L8.99807 16.2188L8.97038 16.2465C8.61046 16.6067 8.61046 17.1887 8.97038 17.5213L11.5729 20.1262C11.739 20.2925 11.9882 20.4034 12.2097 20.4034C12.4312 20.4034 12.6803 20.3202 12.8465 20.1262C13.2064 19.766 13.2064 19.184 12.8465 18.8515L11.7944 17.7984H21.2631C21.7615 17.7984 22.1768 17.3827 22.1768 16.8839C22.1768 16.385 21.7615 15.9139 21.2631 15.9139Z"
                fill="#FD5454"
              />
              <path
                d="M19.3251 19.4611C18.9651 19.1009 18.3837 19.1009 18.0515 19.4611C17.6916 19.8214 17.6916 20.4034 18.0515 20.7359L19.1036 21.789H9.63484C9.13649 21.789 8.72119 22.2047 8.72119 22.7035C8.72119 23.2023 9.13649 23.618 9.63484 23.618H19.0759L18.0238 24.6711C17.6639 25.0314 17.6639 25.6133 18.0238 25.9459C18.1899 26.1121 18.4391 26.223 18.6606 26.223C18.8821 26.223 19.1312 26.1399 19.2974 25.9459L21.8999 23.3409L21.9276 23.3132L21.9553 23.2855C22.3152 22.9252 22.3152 22.3432 21.9553 22.0107L19.3251 19.4611Z"
                fill="#FD5454"
              />
              <path
                d="M56.6186 3.88668C47.7866 3.88668 41.6403 9.87259 41.6403 18.1032C41.6403 26.6664 47.7866 32.8186 56.6186 32.8186C65.4228 32.8186 71.5692 26.6664 71.5692 18.1032C71.5692 9.87259 65.4228 3.88668 56.6186 3.88668ZM56.6186 27.8303C51.1367 27.8303 47.3436 23.7012 47.3436 18.1586C47.3436 12.8933 51.1367 8.90265 56.6186 8.90265C62.1281 8.90265 65.8935 12.8933 65.8935 18.1586C65.9212 23.7012 62.1558 27.8303 56.6186 27.8303Z"
                fill="#FD5454"
              />
              <path
                d="M81.1487 15.3597V12.7824H76.2482V32.3475H81.7024V22.6758C81.7024 18.5189 84.6371 17.0779 87.4611 17.0779C87.9595 17.0779 88.2364 17.1056 88.5686 17.2164V12.145C85.8276 12.145 82.9206 12.921 81.1487 15.3597Z"
                fill="#FD5454"
              />
              <path
                d="M103.796 12.2836C101.083 12.2836 98.951 13.309 97.5943 14.8331V3.6927H92.1401V32.3475H97.0406V29.4099C98.2865 31.433 100.695 32.8463 103.741 32.8463C109.14 32.8463 113.514 28.5508 113.514 22.4541C113.486 16.4128 109.306 12.2836 103.796 12.2836ZM103.104 28.3846C100.031 28.3846 97.4836 26.0567 97.4559 22.4541C97.4559 18.4635 100.557 16.7176 103.159 16.7176C106.232 16.7176 108.475 19.1009 108.475 22.4818C108.447 25.9182 106.094 28.3846 103.104 28.3846Z"
                fill="#FD5454"
              />
              <path
                d="M129.572 12.3113C126.609 12.3113 124.173 13.3644 122.623 15.3597V12.7824H117.888V32.3475H123.343V21.6781C123.343 18.3526 125.64 16.8562 128.16 16.8562C130.707 16.8562 132.7 18.4358 132.7 21.6504V32.3475H138.155V20.4034C138.155 14.9994 134.472 12.3113 129.572 12.3113Z"
                fill="#FD5454"
              />
              <path
                d="M155.071 12.2836C152.358 12.2836 150.226 13.309 148.869 14.8331V3.6927H143.415V32.3475H148.316V29.4099C149.562 31.433 151.97 32.8463 155.016 32.8463C160.415 32.8463 164.789 28.5508 164.789 22.4541C164.789 16.4128 160.608 12.2836 155.071 12.2836ZM154.379 28.3846C151.306 28.3846 148.759 26.0567 148.731 22.4541C148.731 18.4635 151.832 16.7176 154.434 16.7176C157.507 16.7176 159.75 19.1009 159.75 22.4818C159.722 25.9182 157.369 28.3846 154.379 28.3846Z"
                fill="#FD5454"
              />
            </svg>
          </Link>
          <div className="menu-icon" onClick={handleclick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/reservations"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Réservations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/messages"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Messages
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/recherche"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Recherche
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/vosbiens"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Vos biens
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/connexion"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Connexion
              </Link>
            </li>
          </ul>
          {connected && (
            <Link to="/account">
              <img
                className="imgNavbar"
                src="images/profile-pic-test.png"
                alt="Profil"
              />
            </Link>
          )}
          {button && !connected && (
            <Button buttonStyle="btn--outline">Connexion</Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
