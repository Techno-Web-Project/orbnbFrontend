import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import PromotionalCards from '../PromotionalCards';
import SearchComponent from '../SearchComponent';
import { useState } from 'react';

function Home() {

    const[searchTerm, setSearchTerm] = useState('...')
    const[searchBeds, setBeds] = useState(1)

    return (
        <>
            <HeroSection />
            <SearchComponent
                changeTerm={searchTerm => setSearchTerm(searchTerm)}
                addBeds={searchBeds => setBeds(searchBeds)}
                searchedBeds={searchBeds}
            />
            <Cards searchedCity={searchTerm} searchedBeds={searchBeds}/>
            <PromotionalCards />
        </>
    )
}

export default Home;