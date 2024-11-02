import React, { useState, useEffect } from 'react';
import './Preloader.css';
import Image1 from './travel.gif'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading && (
                <div className="preloader ">
                    {/* <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> */}
                    <img src={Image1} alt='img' height="70px" className='' />
                    <h1 className='g-font-b text-black ms-2 text-opacity-75 fs-3 mt-3'>Step Towards a Greener Future...</h1>
                </div>
            )}
        </>
    );
}
