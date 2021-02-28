import React from 'react'
import "./Carousel.css"
import planes from "../../../assets/shipping.jpg"

const Carousel = () => {
    return (
        <div className="carousel">
            <div className="carousel-content">
                <h3>SOME TEXT</h3>
                <h2 className="carousel-h2">OUR KEY SECTORS</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

            <div className="carousel-cards">
                <div className="carousel-single-card">
                    <img className="carousel-image" src={planes} alt="plane images"/>
                    <div className="carousel-image-text">
                        <h2 className="carousel-image-text-h2">LOREM IPSUM</h2>
                        <p>Find out more</p>
                    </div>
                </div>

                <div className="carousel-single-card">
                    <img className="carousel-image" src={planes} alt="plane images"/>
                    <div className="carousel-image-text">
                        <h2 className="carousel-image-text-h2">LOREM IPSUM</h2>
                        <p>Find out more</p>
                    </div>
                </div>

                <div className="carousel-single-card">
                    <img className="carousel-image" src={planes} alt="plane images"/>
                    <div className="carousel-image-text">
                        <h2 className="carousel-image-text-h2">LOREM IPSUM</h2>
                        <p>Find out more</p>
                    </div>
                </div>

                <div className="carousel-single-card">
                    <img className="carousel-image" src={planes} alt="plane images"/>
                    <div className="carousel-image-text">
                        <h2 className="carousel-image-text-h2">LOREM IPSUM</h2>
                        <p>Find out more</p>
                    </div>
                </div>
                <button className="carousel-button">
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Carousel
