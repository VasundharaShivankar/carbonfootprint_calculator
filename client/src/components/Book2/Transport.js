import React from 'react';
import { Link } from 'react-router-dom';
import bookingData from '../../configs/Booking/Transport.json';
import img1 from "./ecommerce.avif"

export default function Transport() {
    return (
        <div className='my-3' id="book2">
        <div className="container px-4 py-5 d-flex flex-column flex-md-row justify-content-center align-items-center bg-body-secondary">
            {bookingData.map((block) => (
                <div className="row mx-auto mb-3 row-eq-height" key={block.id}>
                    <div className="col-md-6 order-md-2 d-flex align-items-center"style={{ height: "350px"}}>
                        <img src={block.img} alt="Transport" className="img-fluid rounded-2 border h-100"  />
                    </div>
                    <div className="col-md-6 order-md-1 d-flex align-items-center">
                        <div className="border rounded-2 p-3">
                            <h2 className='text-info-emphasis'>{block.title}</h2>
                            <p className='text-body-secondary'>{block.description}</p>
                            <Link to={`/destination/${block.id}`} className="btn btn-outline-info btn-lg px-4 me-md-2">
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
