import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import PromotionalCards from '../PromotionalCards';
import SearchComponent from '../SearchComponent';
import { useState } from 'react';

function Home() {
  const [searchTerm, setSearchTerm] = useState('...');
  const [searchBeds, setBeds] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <>
      <HeroSection />
      <SearchComponent
        changeTerm={(searchTerm) => setSearchTerm(searchTerm)}
        addBeds={(searchBeds) => setBeds(searchBeds)}
        searchedBeds={searchBeds}
        setStartDate={(startDate) => setStartDate(startDate)}
        setEndDate={(endDate) => setEndDate(endDate)}
        startDate={startDate}
        endDate={endDate}
      />
      <Cards
        searchedCity={searchTerm}
        searchedBeds={searchBeds}
        startDate={startDate}
        endDate={endDate}
      />
      <PromotionalCards />
    </>
  );
}

export default Home;
