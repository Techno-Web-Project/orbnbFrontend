import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <div className="color-overlay"></div>
            <h1>Une Expérience Unique</h1>
            <p>Qu'attendez-vous ?</p>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Rechercher
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    Proposer
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
