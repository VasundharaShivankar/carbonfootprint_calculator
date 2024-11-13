import React, { useState, useEffect } from 'react'
import './Review.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import ReviewCard from './../../components/ReviewCard/ReviewCard';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
// import ReviewCard from '../../components/ReviewCard/ReviewCard';

function App() {
  const userName = localStorage.getItem("userName");
  const uPhoto = localStorage.getItem("userPhoto")

  const [message, setMessage] = useState('');

  const [reviews, setReviews] = useState([]);
  const loadReview = async () =>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/review`);
    setReviews(response.data.data);
    toast.success("Reviews Loaded");
  }

  useEffect(()=>{
    loadReview();
  }, []);

  const addReview = async() => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/review`,
    {
      name: userName,
      message: message,
      userPhoto: uPhoto
    });
    toast.success(response.data.message);
    loadReview();
    reset();
  }

  const reset = () => {
    setMessage('');
  }

  return (
    <div className='body mt-5'>
      <Navbar/>
      <div className="container mt-5">
        <div className='col-12 col-sm-7 card m-auto shadow p-4 mt-5 width'  style={{ width: '600px' }}>
          <h1 className="text-center text-info-emphasis ">Add Review</h1><hr />
          <p className="mb-2">Name: <span className='fw-bold '>{userName}</span></p>
          <p className="mb-2">Review: </p>
          <input 
            type='text'
            placeholder='Enter Message'
            value={message}
            onChange={(e)=>{
              setMessage(e.target.value)
            }} 
            className='mb-3 p-2 px-3 rounded border border-black'/>

          <div className="mb-3">
            <button type='button' onClick={reset} className="btn btn-outline-warning ">Reset</button>
            <button type='button' onClick={addReview} className="btn btn-warning mx-3">Save</button>
          </div>
        </div>
      </div>

      <div className="body p-5">
        <h1 className="text-center pt-4 text-info-emphasis">Read what our Customers say</h1><hr />
        <div className="container">
          <div className="d-flex flex-wrap">
            {reviews.map((review) => {
              const {_id, name, message, userPhoto} = review;
              return (
                <ReviewCard key={_id} _id={_id} name={name} message={message} userPhoto={userPhoto} loadReview={loadReview} />
              );
            })}
          </div>
        </div>
      </div>
     
      <Footer/>
    </div>

    
  );
}

export default App;
