import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Connexion from './components/pages/Connexion';
import Reservations from './components/pages/Reservations';
import Account from './components/pages/Account';
import AddPage from './components/pages/AddPage';
import Inscription from './components/pages/Inscription';

function App() {
  const [connectedUser, setConnectedUser] = useState(null);

  return (
    <>
      <Router>
        <Navbar connectedUser={connectedUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/connexion"
            element={
              <Connexion
                setConnectedUser={(connectedUser) =>
                  setConnectedUser(connectedUser)
                }
                connectedUser={connectedUser}
              />
            }
          />
          <Route
            path="/inscription"
            element={<Inscription connectedUser={connectedUser} />}
          />
          <Route
            path="/reservations"
            element={<Reservations connectedUser={connectedUser} />}
          />
          <Route
            path="/account"
            element={<Account connectedUser={connectedUser} />}
          />
          <Route
            path="/add"
            element={<AddPage connectedUser={connectedUser} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
