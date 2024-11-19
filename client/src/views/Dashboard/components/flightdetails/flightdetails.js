import React from 'react'

import f1 from './../../f1.jpg';
import f2 from './../../f2.jpg';
import f3 from './../../f3.webp';
import f4 from './../../f4.jpg';
import Arrow from './../../arrow.png'
import './flightdetails.css' 
import 'bootstrap/dist/css/bootstrap.min.css';

const flightdetails = (props) =>{
   const {flightname,departurestation,departuretime , arrivaltime, arrivalStation,Ticketprice} = props;
   
  return (
    <div className="products mt-3">
    <h2>AGRICULTURAL PRODUCTS</h2>
    <div className="product-list">
  
      {/* Card 1 */}
      <div className="product-card">
        <img src={f1} alt="Organic Fertilizer" className="product-logo" />
        <h4 className="product-name">Organic Fertilizer</h4>
        <hr />
        <p className="description">Boost soil fertility with eco-friendly, organic fertilizers that reduce carbon emissions.</p>
        <p className="contact"><strong>Contact:</strong> +91 9876543210</p>
        <p className="price"><strong>Price:</strong> Rs. 499</p>
        <button className="btn btn-outline-success">Buy Now</button>
      </div>
  
      {/* Card 2 */}
      <div className="product-card">
        <img src={f2} alt="Biodegradable Pesticide" className="product-logo" />
        <h4 className="product-name">Biodegradable Pesticide</h4>
        <hr />
        <p className="description">Protect your crops with environmentally safe, biodegradable pesticides.</p>
        <p className="contact"><strong>Contact:</strong> +91 9876543221</p>
        <p className="price"><strong>Price:</strong> Rs. 699</p>
        <button className="btn btn-outline-success">Buy Now</button>
      </div>
  
      {/* Card 3 */}
      <div className="product-card">
        <img src={f3} alt="Plant Growth Enhancer" className="product-logo" />
        <h4 className="product-name">Plant Growth Enhancer</h4>
        <hr />
        <p className="description">Enhance crop yield sustainably with our carbon-neutral growth boosters.</p>
        <p className="contact"><strong>Contact:</strong> +91 9876543232</p>
        <p className="price"><strong>Price:</strong> Rs. 799</p>
        <button className="btn btn-outline-success">Buy Now</button>
      </div>
  
      {/* Card 4 */}
      <div className="product-card">
        <img src={f4} alt="Compost Kit" className="product-logo" />
        <h4 className="product-name">Compost Kit</h4>
        <hr />
        <p className="description">Turn organic waste into valuable compost with our easy-to-use kit.</p>
        <p className="contact"><strong>Contact:</strong> +91 9876543243</p>
        <p className="price"><strong>Price:</strong> Rs. 999</p>
        <button className="btn btn-outline-success">Buy Now</button>
      </div>
  
    </div>
  </div>
  
  )
}

export default flightdetails
