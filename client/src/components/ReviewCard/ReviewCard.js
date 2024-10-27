import React from 'react'
// import axios from 'axios';
// import toast from 'react-hot-toast';
import Quote from './quote.png';
// import User from './user.png';
import './ReviewCard.css';

function ReviewCard({_id, name, message, userPhoto, loadReview}) {
    // const deleteReview = async () => {
    //     const response = await axios.delete(`${process.env.REACT_APP_API_URL}/review/${_id}`)
    //     toast.success(response.data.message)
    //     loadReview();
    //   }

    // const profile = localStorage.getItem("userPhoto");
    
    return (
        <div className="card p-3 px-4 m-3 card-wth border-info shadow">
            <img src={Quote} alt='img' className="icon-wth"/>
            <p className="ms-4">{message}</p>
            <div className="d-flex name">
                <img src={userPhoto} alt='img' className="icon-wth rounded-circle "/>
                <div className="ms-4">
                    <h6 className="fw-bold m-0">{name}</h6>
                    <p className="m-0 text-secondary">user</p>
                </div>
            </div>
            {/* <button onClick={deleteReview}>Delete</button> */}
        </div>
    )
}

export default ReviewCard
