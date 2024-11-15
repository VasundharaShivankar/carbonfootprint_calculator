import React, { useState, useEffect } from 'react'
import './Review.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import ReviewCard from './../../components/ReviewCard/ReviewCard';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';

function App() {
  const userName = localStorage.getItem("userName");
  const uPhoto = localStorage.getItem("userPhoto");

  const [message, setMessage] = useState('');

  const [reviews, setReviews] = useState([]);

  const loadReview = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/review`);  // Added backticks here
      setReviews(response.data.data);
      toast.success("Reviews Loaded");
    } catch (error) {
      console.error('Error loading reviews:', error);
      toast.error("Failed to load reviews");
    }
  };

  useEffect(() => {
    loadReview(); // Load reviews when the component mounts
  }, []);

  const addReview = async () => {
    if (!message) {
      toast.error("Review message cannot be empty!");
      return; // Don't proceed if message is empty
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/review`, {
        name: userName,
        message: message,
        userPhoto: uPhoto
      });

      toast.success(response.data.message);  // Display success toast
      loadReview();  // Reload the reviews after adding
      reset();  // Reset the message input field
    } catch (error) {
      console.error('Error adding review:', error);
      toast.error("Failed to add review");
    }
  }

  const reset = () => {
    setMessage('');  // Reset the message state
  }

  return (
    <div className='body mt-5'>
      <Navbar />
      <div className="container mt-5">
        <div className='col-12 col-sm-7 card m-auto shadow p-4 mt-5 width' style={{ width: '600px' }}>
          <h1 className="text-center text-info-emphasis ">Add Review</h1><hr />
          <p className="mb-2">Name: <span className='fw-bold '>{userName}</span></p>
          <p className="mb-2">Review: </p>
          <input
            type='text'
            placeholder='Enter Message'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            className='mb-3 p-2 px-3 rounded border border-black' />

          <div className="mb-3">
            <button type='button' onClick={reset} className="btn btn-outline-warning ">Reset</button>
            <button type='button' onClick={addReview} className="btn btn-warning mx-3">Save</button>
          </div>
        </div>
      </div>

      <div className="body p-5 review-height">
        <h1 className="text-center pt-4 text-info-emphasis">Read what our Customers say</h1><hr />
        <div className="container">
          <div className="d-flex flex-wrap">
            {reviews.map((review) => {
              const { _id, name, message, userPhoto } = review;
              return (
                <ReviewCard key={_id} _id={_id} name={name} message={message} userPhoto={userPhoto} loadReview={loadReview} />
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
