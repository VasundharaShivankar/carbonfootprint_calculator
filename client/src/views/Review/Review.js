import React, { useState, useEffect } from 'react';
import './Review.css';
import toast from 'react-hot-toast';
import ReviewCard from './../../components/ReviewCard/ReviewCard';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function App() {
  const userName = localStorage.getItem('userName') || 'Anonymous'; 
  const uPhoto = localStorage.getItem('userPhoto') || ''; 

  const [message, setMessage] = useState('');
  const [reviews, setReviews] = useState([]);

  // Load reviews from local storage on component mount
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(savedReviews);
  }, []);

  const addReview = () => {
    if (!message) {
      toast.error('Review message cannot be empty!');
      return;
    }

    const newReview = {
      _id: Date.now(), 
      name: userName,
      message: message,
      userPhoto: uPhoto,
    };

    // Add the new review to the existing reviews
    const updatedReviews = [newReview, ...reviews];

    // Update state and local storage
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));

    // Show success popup
    toast.success('Review added successfully!');

    // Reset the input field
    reset();
  };

  const reset = () => {
    setMessage('');
  };

  return (
    <div className="mainbody mt-4">
      <Navbar />
      <div className="container">
      <p className='title'>ADD REVIEW</p>
    <p className='title-text'>Share your experience with us! Your feedback inspires us to serve you better.</p>
    <hr />
        <div className="col-12 col-sm-7 card m-auto shadow p-4 mt-4 width" style={{ width: '600px' }}>
          <p className="mb-2">
            Name: <span className="fw-bold">{userName}</span>
          </p>
          <p className="mb-2">Review: </p>
          <input
            type="text"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-3 p-2 px-3 rounded border border-black"
          />
          <div className="mb-3">
            <button type="button" onClick={reset} className="btn btn-outline-warning">
              Reset
            </button>
            <button type="button" onClick={addReview} className="btn btn-warning mx-3">
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="mainbody p-5 review-height">
        <h1 className="text-center pt-4 text-info-emphasis">Read what our Customers say</h1>
        <hr />
        <div className="container review-container">
          <div className="review-card-wrapper">
            {reviews.map((review) => {
              const { _id, name, message, userPhoto } = review;
              return <ReviewCard key={_id} _id={_id} name={name} message={message} userPhoto={userPhoto} />;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
