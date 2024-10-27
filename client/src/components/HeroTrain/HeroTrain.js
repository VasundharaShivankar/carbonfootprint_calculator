import React from 'react';
import './HeroSec.css';
import Img1 from "./img1.jpg";

// import bookingData from '../../configs/Booking/Transport.json';
import { Link } from 'react-router-dom';

export default function HeroShop() {
    return (
        <div className='border-top bg-white  '>
            <div className="container col-xxl-8 px-4 py-5 ">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6 ">
                        <img src={Img1} className="d-block mx-lg-auto img-fluid heroimg" alt="Bootstrap Themes"   loading="lazy"/>
                        {/* <img src="http://html.0effortthemes.com/go/images/train-LGT.gif" className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" loading="lazy" /> */}
                    </div>
                    <div className="col-lg-6">
                        <h1 className="fs-1 fw-bold text-info-emphasis lh-1 mb-3">DISCOVER THE WORLD WITH OUR SHOPS</h1>
                        <p className="lead text-body-secondary " style={{fontSize:'20px'}}>Discover the ultimate shopping experience with Elementum Shop, where finding the perfect products is just a click away. Our platform offers a vast selection of high-quality items, curated to meet your every need. Whether you’re looking for the latest trends, essential everyday items, or unique finds, we have it all. Browse our extensive collection, enjoy exclusive deals, and shop with ease from anywhere, at any time. With secure payments, fast deliveries, and personalized recommendations tailored to your preferences, we make shopping seamless and enjoyable. Our user-friendly interface allows you to explore categories effortlessly, and our advanced technology ensures a personalized shopping journey with recommendations based on your interests. Plus, we prioritize your safety with encrypted transactions and multiple payment options, so you can shop confidently. Experience exceptional customer service, easy returns, and a shopping journey that is convenient, fun, and hassle-free at Elementum Shop.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="/destination/2">
                                <button type="button" className="btn btn-outline-info  btn-lg px-4 me-md-2">Shop Now</button>
                            </Link>
                            <Link to="/contact">
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
