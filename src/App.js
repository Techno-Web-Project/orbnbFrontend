import React from 'react';
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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/account" element={<Account />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/add_note" element={<AddHousingNotePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
