import React from 'react';
import './Statistics.css';

export default function Statistics() {
    const stats = [
        {
            logo: "https://dtora.wpengine.com/wp-content/uploads/2019/03/count1.png",
            name: "Farm Carbon Data",
            quantity: "500+ Farms"
        },
        {
            logo: "https://dtora.wpengine.com/wp-content/uploads/2019/03/count2.png",
            name: "Reduction Initiatives",
            quantity: "1200+ Projects"
        },
        {
            logo: "https://dtora.wpengine.com/wp-content/uploads/2019/03/count3.png",
            name: "Eco Consultants",
            quantity: "80+ Experts"
        },
        {
            logo: "https://dtora.wpengine.com/wp-content/uploads/2019/03/count4.png",
            name: "Carbon Calculations",
            quantity: "15,000+"
        }
    ];

    return (
        <div className="bg-img-stat w-100">
            <div className="translucent-blue p-5 w-100">
                <div className="container">
                    <div className="row">
                        {stats.map((stat, index) => (
                            <div className="col-md-3 mb-4" key={index}>
                                <div className="text-center">
                                    <img src={stat.logo} alt={stat.name} style={{ maxWidth: '100%', height: 'auto' }} />
                                    <div className="my-2 fw-bold fs-5"> {stat.quantity}</div>
                                    <strong>{stat.name}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
