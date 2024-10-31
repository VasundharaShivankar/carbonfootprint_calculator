import React from 'react';
import './Features.css'

export default function Features() {
    const features = {
        "sections": [
    {
        "name": "Carbon Footprint Calculator",
        "content": "Easily calculate your farm's carbon footprint with our simple and accurate calculator. Just a few steps to valuable insights!",
        "logo": "https://cdn-icons-png.flaticon.com/128/1234/1234988.png"
    },
    {
        "name": "Eco-Friendly Suggestions",
        "content": "Get tailored recommendations for fertilizers and practices that reduce environmental impact.",
        "logo": "https://cdn-icons-png.flaticon.com/128/2731/2731907.png"
    },
    {
        "name": "Personalized Insights",
        "content": "Receive insights based on your farm data to enhance productivity while maintaining sustainability!",
        "logo": "https://cdn-icons-png.flaticon.com/128/1140/1140313.png"
    },
    {
        "name": "24/7 Support",
        "content": "Connect with our team anytime for assistance, farming tips, and answers to your queries. We’re here to support your sustainable journey!",
        "logo": "https://cdn-icons-png.flaticon.com/128/906/906794.png"
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
                            <img src={section.logo} alt={section.name} width="55" height="55"/>
                        </div>
                        <h3 className="fs-3 text-body-emphasis">{section.name}</h3>
                        <p className='fs-5 text-body-emphasis'>{section.content}</p>
                        

                    </div>
                ))}
            </div>

            
        </div>
        
        </div>
    );
}
