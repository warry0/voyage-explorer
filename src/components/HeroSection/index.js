import React from 'react'
import { Button } from '../ButtonElements'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Voyager Plus</h1>
            <p>Organiser votre prochain voyage aujourd'hui</p>
            <div className="hero-btns">
                <Button>Commencer</Button>
            </div>
        </div>
    )
}

export default HeroSection