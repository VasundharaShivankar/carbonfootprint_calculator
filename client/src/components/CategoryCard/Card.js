// src/components/Card.js
import React from 'react';
import './Card.css'; // Optional: for styling

const Card = ({ img, categoryname, details }) => {
    return (
        <div className="card">
            <img src={img} alt={categoryname} className="card-image" />
            <h3 className="card-title">{categoryname}</h3>
            <p className="card-details">{details}</p>
            <button className='card-btn'>Explore</button>
        </div>
    );
};

export default Card;
