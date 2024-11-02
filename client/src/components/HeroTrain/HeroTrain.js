import React from 'react';
import './HeroSec.css';
import Img1 from "./img1.jpg"; // Update to the relevant image for carbon footprinting
import { Link } from 'react-router-dom';

export default function HeroCarbonFootprint() {
    return (
        <div className='border-top bg-white'>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={Img1} className="d-block mx-lg-auto img-fluid heroimg" alt="Carbon Footprint" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="fs-1 fw-bold text-info-emphasis lh-1 mb-3">UNDERSTAND YOUR FARM'S CARBON IMPACT</h1>
                        <p className="lead text-body-secondary" style={{ fontSize: '20px' }}>
                            Join us in the journey towards sustainability with our comprehensive carbon footprint calculator. Assess your farm's environmental impact and discover actionable insights to reduce emissions. Our user-friendly platform provides you with tailored recommendations to enhance your farming practices while minimizing your ecological footprint. Whether you're a seasoned farmer or just starting out, our tools are designed to support your transition to greener methods. Start making a difference today with our expert guidance and resources.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="/calculator">
                                <button type="button" className="btn btn-outline-info btn-lg px-4 me-md-2">Start Calculating</button>
                            </Link>
                            <Link to="/contact">
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
