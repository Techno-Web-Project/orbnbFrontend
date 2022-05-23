import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import PromotionalCards from '../PromotionalCards';
import SearchComponent from '../SearchComponent';
import { useState } from 'react';

function Home() {

    const[searchTerm, setSearchTerm] = useState('...')

    return (
        <>
            <HeroSection />
            <SearchComponent changeTerm={searchTerm => setSearchTerm(searchTerm)} />
            <Cards searchedCity={searchTerm} />
            <PromotionalCards />
        </>
    )
}

export default Home;