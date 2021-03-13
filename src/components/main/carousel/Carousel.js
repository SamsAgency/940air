import React from 'react'
import "./Carousel.css"
import planes from "../../../assets/air-kenya.jpg"
import truck from "../../../assets/truck.jpg"
import ship from "../../../assets/ship.jpg"
import van from "../../../assets/fleet-5153286-1920-600x400.jpeg"
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div className="carousel">
            <div className="carousel-content">
                <h2 className="carousel-h2">OUR KEY SECTORS</h2>
                <p>Our key sectors include</p>
            </div>

            <Link to="../../About/About.js" className="carousel-cards">
                <div className="carousel-single-card">
                    <img className="carousel-image" src={truck} alt="plane images"/>
                    <div className="carousel-image-text">
                        <h2 className="carousel-image-text-h2">Trucking</h2>
                        <p>Find out more</p>
                    </div>
                </div>

                <Link to="../../About/About.js" className="carousel-single-card">
                    <img className="carousel-image" src={planes} alt="plane images"/>
                    <div className="carousel-image-text">
                        <h2 className="carousel-image-text-h2">Air freight</h2>
                        <p>Find out more</p>
                    </div>
                </Link>

                <Link to="../../About/About.js" className="carousel-single-card">
                    <img className="carousel-image" src={ship} alt="plane images"/>
                    <div className="carousel-image-text">
                        <h2 className="carousel-image-text-h2">Sea freight</h2>
                        <p>Find out more</p>
                    </div>
                </Link>

                <Link to="../../About/About.js" className="carousel-single-card">
                    <img className="carousel-image" src={van} alt="plane images"/>
                    <div className="carousel-image-text">
                        <h2 className="carousel-image-text-h2">Door to door</h2>
                        <p>Find out more</p>
                    </div>
                </Link><br/>
            </Link>
            <Link to="/services" className="carousel-button-div">
                <button className="carousel-button">
                    Learn More
                </button>
            </Link>
        </div>
    )
}

export default Carousel
