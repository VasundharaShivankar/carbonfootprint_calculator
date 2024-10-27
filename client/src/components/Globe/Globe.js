import React from 'react';
import './Globe.css'

export default function Globe() {
    return (
        <>
            

            <div className="container mx-auto row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                <img src='https://dtora.wpengine.com/wp-content/uploads/2019/03/count2.png' alt='img' />
                </div>
                <h3 className="fs-2 text-info-emphasis ">Go Green</h3>
                <p className='text-body-secondary'>Shop sustainably online & offline, supporting eco-friendly brands and reducing waste. Together, let's make a greener tomorrow.                </p>
                
                
            </div>
            <div className="feature col">
            <img className='rotate mx-auto' src='https://dtora.wpengine.com/wp-content/uploads/2019/03/world-img.png' alt='img' />
            </div>
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                    <img src='https://dtora.wpengine.com/wp-content/uploads/2019/03/count2.png' alt='img' />
                </div>
                <h3 className="fs-2 text-info-emphasis ">Carbon Emmision</h3>
                <p className='text-body-secondary'>To address the challenge of global warming, our agency advocates for low-carbon travel options and implements initiatives to minimize carbon emissions, contributing to the fight against climate change.</p>
               
            </div>
        </div>

        </>
    )
}
