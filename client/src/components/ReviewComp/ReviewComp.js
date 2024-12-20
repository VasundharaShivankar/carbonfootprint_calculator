import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import ReviewCard from './../../components/ReviewCard/ReviewCard';

export default function ReviewComp() {

    const [reviews, setReviews] = useState([]);

    const loadReview = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/review`);  // Added backticks here
            setReviews(response.data.data);
            toast.success("Reviews Loaded");
        } catch (error) {
            console.error('Error loading reviews:', error);
            // toast.error("Failed to load reviews");
        }
    };

    useEffect(() => {
        loadReview(); // Call the loadReview function when the component mounts
    }, []);

    return (
        <div className="p-5">
            <h1 className="text-center text-info-emphasis">Read what our Customers say</h1>
            <hr />
            <div className="container mx-auto" style={{ maxHeight: '700px', overflowY: 'auto' }}>
                <div className="d-flex flex-wrap justify-content-center">
                    {reviews.map((review) => (
                        <ReviewCard key={review._id} {...review} loadReview={loadReview} />
                    ))}
                </div>
            </div>
        </div>
    );
}
