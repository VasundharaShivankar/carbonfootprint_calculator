import React from 'react';
import { Link } from 'react-router-dom';
import bookingData from '../../configs/Booking/Transport.json';
import img1 from "./ecommerce.avif"

export default function Transport() {
    return (
        <div className='my-3' id="book2"> {/* Increased margin on the section */}
            <div className="container py-5 d-flex flex-column flex-md-row justify-content-center align-items-center bg-body-secondary">
                {bookingData.map((block) => (
                    <div className="row mx-auto mb-4 row-eq-height" key={block.id}> {/* Increased bottom margin */}
                        <div className="col-md-5 order-md-2 d-flex align-items-center" style={{ height: "350px" }}>
                            <img 
                                src={block.img} 
                                alt="Transport" 
                                className="img-fluid rounded-2 border h-100" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                        </div>
                        <div className="col-md-6 order-md-1 d-flex align-items-center">
                            <div className="border rounded-2"  style={{ width: "300px" }}> {/* Increased padding for better spacing */}
                                <h2 className='text-info-emphasis'>{block.title}</h2>
                                <p className='text-body-secondary'>{block.description}</p>
                                <Link to={`/calculator`} className="btn btn-outline-warning btn-lg px-4 me-md-2">
                                    {block.buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
