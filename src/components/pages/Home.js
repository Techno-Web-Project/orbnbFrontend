import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import PromotionalCards from '../PromotionalCards';
import SearchComponent from '../SearchComponent';

function Home() {
    return (
        <>
            <HeroSection />
            <SearchComponent />
            <Cards />
            <PromotionalCards />
        </>
    )
}

export default Home;