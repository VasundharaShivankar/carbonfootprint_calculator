import React from 'react';
import Img2 from './img1.jpg'; // Ensure this image reflects the theme of carbon footprinting
import { Link } from 'react-router-dom';
import './HeroAero.css';

export default function HeroCarbonFootprint() {
    return (
        <>
            <div className='border-top bg-white'>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6" style={{ position: 'relative', height:"350px"}}>
                            <img 
                                src={Img2} 
                                className="d-block mx-lg-auto img-fluid img-float" 
                                alt="Carbon Footprint" 
                                loading="lazy" 
                                style={{ height: "250px", position: 'absolute', top: 70, left: 80, zIndex: 2 }} 
                            />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="fs-1 fw-bold text-info-emphasis lh-1 mb-3">EMBRACE SUSTAINABILITY WITH CARBON TRACKING</h1>
                            <p className="lead text-body-secondary" style={{fontSize: '20px'}}>
                                Take a step towards a greener future with our carbon footprint calculator for agriculture. This platform empowers you to evaluate and minimize your farm's environmental impact. Get insights on sustainable practices, actionable recommendations, and resources to help you reduce your carbon emissions. Whether you're an individual farmer or part of a larger agricultural community, our goal is to guide you towards eco-friendly practices that benefit both your business and the planet.
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Link to="/calculator">
                                    <button type="button" className="btn btn-outline-warning btn-lg px-4 me-md-2">Calculate Now</button>
                                </Link>
                                <Link to="/contact">
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
