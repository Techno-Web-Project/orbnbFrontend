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
import HousingUpdate from './components/pages/HousingUpdate';
import Footer from './components/Footer';
import VosBiens from './components/pages/VosBiens';
import DetailHousePage from './components/pages/DetailHousePage';
import ReservationForm from './components/ReservationForm';
import Messages from './components/pages/Messages';
import TestBookingStatus from './components/pages/TestBookingStatus';
import MessagesRecus from './components/pages/MessagesRecus';

function App() {
  const [connectedUser, setConnectedUser] = useState(null);
  const [connectedId, setConnectedId] = useState(null);
  const [success, setSuccess] = useState(false);

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
                setSuccess={(success) => setSuccess(success)}
                success={success}
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
            element={
              <Account
                setConnectedUser={(connectedUser) =>
                  setConnectedUser(connectedUser)
                }
                connectedUser={connectedUser}
                setConnectedId={(connectedId) => setConnectedId(connectedId)}
                connectedId={connectedId}
                setSuccess={(success) => setSuccess(success)}
                success={success}
              />
            }
          />
          <Route
            path="/vosbiens"
            element={<VosBiens connectedUser={connectedUser} />}
          />
          <Route
            path="/house/:id"
            element={
              <DetailHousePage
                connectedUser={connectedUser}
                connectedId={connectedId}
              />
            }
          />
          <Route path="/add" element={<AddPage connectedId={connectedId} />} />
          <Route
            path="/messages"
            element={<MessagesRecus connectedId={connectedId} />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
