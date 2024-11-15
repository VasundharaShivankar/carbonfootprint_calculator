import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <div className='w-100 bg-img-footer pb-6 footer-img'>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 pb-3 my-5 border-top mb-0">
                    <div className="col">
                        <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <h4>Empowering Sustainable Farming</h4>
                        </Link>
                        <p className="text-body-secondary">Join us in reducing your farm's carbon footprint. Get insights and tips on eco-friendly farming right to your inbox.</p>
                    </div>

                    <div className="col"></div>

                    <div className="col">
                        <h5>Connect with Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Facebook</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Instagram</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Twitter</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">LinkedIn</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Our Locations</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Nagpur, Maharashtra</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Mumbai, Maharashtra</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Pune, Maharashtra</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Contact Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="mailto:support@krishicarbon.com" className="nav-link p-0 text-body-secondary">vasundharashivankar179@gmail.com</a></li>
                            <li className="nav-item mb-2"><a href="tel:+919970059488" className="nav-link p-0 text-body-secondary">+91 9970059488</a></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Nagpur, Maharashtra</Link></li>
                        </ul>
                    </div>
                </footer>

                <div className="offset-md-1 mx-auto">
                    <form className="w-75 gap-2 flex-sm-row mx-auto gap-2">
                        <div className="d-flex flex-column flex-sm-row gap-2">
                            <h5>Subscribe to our Newsletter</h5>
                            <p>Receive monthly insights and updates on sustainable farming practices.</p>
                        </div>
                        <div className="d-flex flex-column flex-sm-row gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input id="newsletter1" type="email" className="form-control" placeholder="Email address" />
                            <button className="btn btn-warning" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
