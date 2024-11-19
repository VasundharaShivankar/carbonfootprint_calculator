// Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import img3 from './img4.png';
import img5 from "./img3.webp";
import './Signup.css';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, formData);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="body">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="fw-bold text-body-emphasis mb-3 mx-5">Join Us Now</h1>
            <p className="col-lg-10 text-body-emphasis fs-6 mx-5">Create an account to enjoy exclusive features and updates!</p>
            <Link to="/">
              <img src={img5} alt="img" style={{ height: "234px", cursor: "pointer" }} className="" />
            </Link>
          </div>
          <div className="col-md-10 mx-auto col-lg-5 box">
            <form className="p-3 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSignup}>
              <img src={img3} alt="Signup" style={{ height: "164px" }} className="loginimg" />
              <input
                type="email"
                className="form-control my-2"
                placeholder="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                className="form-control my-2"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                className="form-control my-2"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button  className="w-50 btn btn-submit border-info btn-md border d-flex d-flex justify-content-center align-items-center" type="submit">Sign Up</button>
              <hr className="my-4" />
              <small className="text-body-secondary">Already have an account? <Link to="/login">Log In</Link></small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
