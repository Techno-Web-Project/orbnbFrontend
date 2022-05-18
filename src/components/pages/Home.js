import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import PromotionalCards from '../PromotionalCards';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <PromotionalCards />
        </>
    )
}

export default Home;