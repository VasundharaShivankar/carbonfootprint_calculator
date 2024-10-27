import React from 'react';
import Img2 from './img1.jpg';
// import bookingData from '../../configs/Booking/Transport.json';
import { Link } from 'react-router-dom';
// import vdo1 from './vdo1.gif';
import './HeroAero.css'


export default function HeroECommerce() {
    return (
        <>
            <div className='border-top bg-white'>
                <div className="container col-xxl-8 px-4 py-5 ">
                    <div className="row flex-lg-row align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6 " style={{ position: 'relative', height:"350px"}}>
                            {/* <img src="http://html.0effortthemes.com/go/images/banner-animation/cloud.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" style={{ height: "350px", position: 'absolute', top: 0, left: 0, zIndex: 0 }} /> */}
                            <img src={Img2} className="d-block mx-lg-auto img-fluid img-float" alt="Bootstrap Themes" loading="lazy" style={{ height: "250px",position: 'absolute', top: 70, left: 80, zIndex: 2 }} />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="fs-1 fw-bold text-info-emphasis lh-1 mb-3">DISCOVER THE WORLD WITH ECOMMERCE</h1>
                            <p className="lead text-body-secondary" style={{fontSize:'20px'}}>Discover the future of shopping with our e-commerce platform, designed to offer a seamless and enjoyable experience for every customer. Explore a vast selection of products from various categories, all curated to meet your needs and preferences. Enjoy exclusive discounts, personalized recommendations, and a user-friendly interface that makes browsing and purchasing simple. Our platform offers secure payment options, ensuring your transactions are safe and protected at every step. With fast and reliable delivery services, you can shop confidently knowing your orders will arrive on time. Our detailed product descriptions, customer reviews, and comparison tools help you make informed decisions, while our 24/7 customer support ensures assistance whenever you need it. Whether you're shopping from your desktop or mobile device, our responsive design allows you to access everything with ease. Join millions of satisfied customers and elevate your shopping experience with an e-commerce platform that puts you first.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Link to="/destination/1">
                                    <button type="button" className="btn btn-outline-info btn-lg px-4 me-md-2">Shop Now</button>
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
    )
}
