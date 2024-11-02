import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';
import Img1 from './main1.jpg'; 
import Img2 from './main2.jpg';
import Img3 from './main3.jpg';

export default function Carousel() {
    return (
        <div className='carousel-size' style={{ width: '100%' }}>
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Img1} className="d-block w-100" alt="Slide 1" style={{ height: '500px', objectFit: 'cover' }} />
                        <div className="container">
                            <div className="carousel-caption text-black">
                                <h1 style={{ color: 'white', textAlign: 'center' }}>Calculate Your Farm's Carbon Footprint</h1>
                                <p className="opacity-75" style={{ color: 'white', textAlign: 'center' }}>Get a precise assessment of emissions and start your journey toward sustainability.</p>
                                <p style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link className="btn btn-lg btn-info" to="/calculate">Start Calculating</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img2} className="d-block w-100" alt="Slide 2" style={{ height: '500px', objectFit: 'cover' }} />
                        <div className="container">
                            <div className="carousel-caption text-light">
                                <h1 style={{ color: 'white', textAlign: 'center' }}>Personalized Sustainability Suggestions</h1>
                                <p style={{ color: 'white', textAlign: 'center' }}>Receive expert advice on practices that can reduce emissions on your farm.</p>
                                <p style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link className="btn btn-lg btn-info" to="/suggestions">Learn More</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img3} className="d-block w-100" alt="Slide 3" style={{ height: '500px', objectFit: 'cover' }} />
                        <div className="container">
                            <div className="carousel-caption text-black">
                                <h1 style={{ color: 'white', textAlign: 'center' }}>Your Farming Companion Chatbot</h1>
                                <p style={{ color: 'white', textAlign: 'center' }}>Instant support for all your agricultural queries and guidance.</p>
                                <p style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link className="btn btn-lg btn-info" to="/chatbot">Chat Now</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
