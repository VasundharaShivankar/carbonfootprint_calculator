import React from 'react';
import './Globe.css';

export default function Globe() {
    return (
        <>
            <div className="container mx-auto row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col text-center text-lg-start">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                        <img src="https://dtora.wpengine.com/wp-content/uploads/2019/03/count2.png" alt="eco-friendly" />
                    </div>
                    <h3 className="fs-2 text-info-emphasis">Eco-Friendly Practices</h3>
                    <p className="text-body-secondary">
                        Promote sustainable farming techniques and eco-friendly choices that contribute to reducing carbon emissions on farms. Join us in building a greener, more sustainable future.
                    </p>
                </div>

                <div className="feature col d-flex justify-content-center align-items-center globe-container">
                    <img 
                        className="rotate globe-img" 
                        src="https://dtora.wpengine.com/wp-content/uploads/2019/03/world-img.png" 
                        alt="Earth" 
                    />
                </div>

                <div className="feature col text-center text-lg-start">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                        <img src="https://dtora.wpengine.com/wp-content/uploads/2019/03/count2.png" alt="carbon emission" />
                    </div>
                    <h3 className="fs-2 text-info-emphasis">Track Carbon Emissions</h3>
                    <p className="text-body-secondary">
                        Our tools help farmers track and reduce carbon emissions, offering insights to optimize agricultural processes and contribute positively to the fight against climate change.
                    </p>
                </div>
            </div>
        </>
    );
}
