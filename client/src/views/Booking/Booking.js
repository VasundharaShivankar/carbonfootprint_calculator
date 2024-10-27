import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import toast from 'react-hot-toast'
import './Booking.css';
import Destination from '../Destination/Destination.js'
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';

function Booking() {

  const [payment, setPayment] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const email = localStorage.getItem("email");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/booking`, {
        name,
        phone,
        email
      });
      // console.log(response.data);
      // alert('New passenger added!');
      toast.success(response.data.message);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
     
    <div className=''>
      <Navbar/>
      <div className='text-center bg-info mt-5 p-3'>
        <h1 className='  fs-3'>PASSENGER DETAILS</h1>
        <span className=''> HDP TO AVG </span>
        <span>| WED, 10 APR 2024 </span>
      </div>

      <hr className=' border-5 '></hr>

      <div className=' ms-3 ' >
        <b>HDP xyz EXPRESS(1234)</b>
      </div>

      <hr className=' border-5 '></hr>

      <div className='d-flex justify-content-around '>
        <div>
          <b>15:30</b>
          <p>Hadapsar</p>
          <p>(HDP)</p>
          <p>Tue, 09 Apr</p>
        </div>

        <div className=' d-flex flex-column justify-content-around '>
          <p>--10h:30m--</p>
          <span className=' text-bg-dark rounded  text-light p-2'>SLEEPER(SL)</span>
        </div>

        <div>
          <b>1:30</b>
          <p>Laturr</p>
          <p>(LTR)</p>
          <p>Wed, 10 Apr</p>
        </div>
      </div>
      <hr></hr>

      {!formSubmitted && (
        <div className='p-3 select-passenger container m-auto d-block  '>
          <h4 className="mb-3">Select Passenger</h4>
          <div className="row">
            <div className="col-md-6 mb-3">
              <button className="btn btn-outline-info" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">+ Add New</button>
            </div>
            {/* <div className="col-md-6 mb-3">
            <button className="btn btn-secondary" type="button">+ Add Existing</button>
          </div> */}
          </div>
          <p className="mb-0">*Children under 5 years of age shall be carried free and no purchase of any ticket is required. (If no separate berth is opted.)</p>
        </div>

      )}


      <div className='container w-75   border border-black'>
        {formSubmitted && (
          <div className='user-detail-card container mt-4'>
            <h4 className="mb-3">Passenger Details</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Passenger Name</label>
                  <h4>{name}</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Mobile Number</label>
                  <div className="input-group">
                    <span className="input-group-text">+91-</span>
                    <span className='input-group-text'>{phone}</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <p>Your ticket will be sent to <a href={`mailto:${email}`}><span className='text-decoration-underline text-info'>{email}</span></a> and +91-{phone}</p>
          </div>

        )}



        <div className='container mt-4'>
          <h4>Payment Mode</h4>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="payment" id="credit" value="credit" onChange={() => setPayment('credit')} checked={payment === 'credit'} />
            <label className="form-check-label" htmlFor="credit">
              PAy through Credit & Debit Cards/Net Banking/Wallet/Others
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="payment" id="upi" value="upi" onChange={() => setPayment('upi')} checked={payment === 'upi'} />
            <label className="form-check-label" htmlFor="upi">
              Pay through BHIM/UPI
            </label>
          </div>
        </div>


        <div className='container p-2 pb-5'>
          <h3 className="mb-3">Travel Insurance</h3>
          <div className="mb-3">
            <p className="mb-0">Do you want to purchase travel insurance? It costs ₹0.75 per person.</p>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="insuranceCheckbox" onChange={(e) => {
            }} />
            <label className="form-check-label" htmlFor="insuranceCheckbox">
              Yes, I want to purchase travel insurance.
            </label>
          </div>

        </div>
        
      </div>

      <div className="flex text-end container ">
            <Link to="/timeslot" className='btn border border-black m-3'>
              Cancle
            </Link>
          <Link to="/payment"  className="btn btn-info" >
            Submit
          </Link>
        </div>

      {/* anand add  onClick={handleFormSubmit} */}


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Passenger</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" className='w-100 p-2 rounded' placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <input type="tel" className='w-100 p-2 rounded' placeholder="Mobile No." onChange={(e) => setPhone(e.target.value)} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" onClick={handleSubmit} data-bs-dismiss="modal" className="btn btn-outline-info">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Booking;
