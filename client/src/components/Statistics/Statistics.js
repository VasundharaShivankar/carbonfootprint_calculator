import React from 'react';
import './Statistics.css';

export default function Statistics() {

    const stats = [
        {
            logo: "https://dtora.wpengine.com/wp-content/uploads/2019/03/count1.png",
            name: "Category Packages",
            quantity: "9000+"
        },
        {
            logo: "https://dtora.wpengine.com/wp-content/uploads/2019/03/count2.png",
            name: "Branches All Over",
            quantity: 280
        },
        {
            logo: "https://dtora.wpengine.com/wp-content/uploads/2019/03/count3.png",
            name: "Expert Agents",
            quantity: "900+"
        },
        {
            logo: "https://dtora.wpengine.com/wp-content/uploads/2019/03/count4.png",
            name: "Activities Listed",
            quantity: 1920
        }
    ];

    return (
        <div className='bg-img-stat w-100 '>
            <div className='translucent-blue p-5 w-100'>
                <div className='container'>

                    <div className='row'>
                        {stats.map((stat, index) => (
                            <div className='col-md-3 mb-4' key={index}>
                                <div className='text-center  '>
                                    <img src={stat.logo} alt={stat.name} style={{ maxWidth: '100%', height: 'auto' }} className='logo-white' />
                                    <div className='my-2 fw-bold fs-5'> {stat.quantity}</div>
                                    <strong>{stat.name}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
