import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Connexion from './components/pages/Connexion';
import Reservations from './components/pages/Reservations';
import Account from './components/pages/Account';

function App() {

  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/connexion' element = {<Connexion/>} />
          <Route path='/reservations' element = {<Reservations/>} />
          <Route path='/account' element = {<Account/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
