import React from 'react';
import './Features.css'

export default function Features() {
    const features = {
        "sections": [
            {
                "name": "Easy Booking",
                "content": "Experience hassle-free shopping planning with our easy booking system. Find in just a few clicks!",
                "logo": "https://cdn-icons-png.flaticon.com/128/61/61584.png"
            },
            {
                "name": "Unified Cart",
                "content": "Seamless shopping cart experience across online and in-store!",
                "logo": "https://cdn-icons-png.flaticon.com/128/891/891911.png"
            },
            {
                "name": "Product Recommendations",
                "content": "Personalized product suggestions based on browsing history and purchase behavior!",
                "logo": "https://cdn-icons-png.flaticon.com/128/2491/2491921.png"
            },
            {
                "name": "Friendly Support",
                "content": "Experience personalized assistance and support from our friendly team round the clock. We're here to ensure your shopping experience is smooth and memorable!",
                "logo": "https://cdn-icons-png.flaticon.com/128/13224/13224269.png"
            }

        ]
    };

    return (
        <div className='bg-img w-100 g-font-b '>
        <div className="container  px-4 py-3" id="featured-3">
            <h2 className="pb-2 border-bottom  border-black ">Features</h2>
            <div className="row g-4 py-3 row-cols-1 row-cols-md-2 row-cols-lg-4">
                {features.sections.map((section, index) => (
                    <div key={index} className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-3 mb-3">
                            {/* You should replace the SVG element with your own logo */}
                            <img src={section.logo} alt={section.name} width="48" height="48" />
                        </div>
                        <h3 className="fs-3 text-body-emphasis">{section.name}</h3>
                        <p className='fs-6 text-body-secondary'>{section.content}</p>
                        

                    </div>
                ))}
            </div>

            
        </div>
        
        </div>
    );
}
