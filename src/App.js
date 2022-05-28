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
import AddHousingNotePage from './components/pages/AddHousingNotePage';
import Footer from './components/Footer';
import VosBiens from './components/pages/VosBiens';

function App() {
  const [connectedUser, setConnectedUser] = useState(null);
  const [connectedId, setConnectedId] = useState(null);

  return (
    <>
      <Router>
        <Navbar connectedUser={connectedUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acceuil" element={<Home />} />
          <Route
            path="/connexion"
            element={
              <Connexion
                setConnectedUser={(connectedUser) =>
                  setConnectedUser(connectedUser)
                }
                connectedUser={connectedUser}
                setConnectedId={(connectedId) => setConnectedId(connectedId)}
                connectedId={connectedId}
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
            path="/vosbiens"
            element={<VosBiens connectedUser={connectedUser} />}
          />
          <Route path="/add" element={<AddPage connectedId={connectedId} />} />
          <Route path="/add_note" element={<AddHousingNotePage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
