import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from './img3.png';
import img2 from './img2.png';
import img3 from './img1.jpg';
import img5 from './Earth.webp';
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SignUp Form Data:', formData);
    // Add logic to handle form submission, such as sending data to the server
  };

  return (
    <div className="body">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5 mb-5">
        <div className="row align-items-center g-lg-5 py-5 mb-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="fw-bold text-body-emphasis mb-3 mx-5">Join Us</h1>
            <p className="col-lg-10 text-body-emphasis fs-6 mx-5">
              Create an account to explore amazing features and stay connected!
            </p>
            <Link to="/">
              <img
                src={img5}
                alt="img"
                style={{ height: "234px", cursor: "pointer" }}
                className=""
              />
            </Link>
          </div>
          <div className="col-md-10 mx-auto col-lg-5 box">
            <form
              className="p-3 p-md-5 border rounded-3 bg-body-tertiary"
              onSubmit={handleSubmit}
            >
              <img
                src={img3}
                alt="img"
                style={{ height: "164px" }}
                className="signupimg"
              />
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary mt-3"
                type="submit"
              >
                Sign Up
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                By signing up, you agree to the terms of service and privacy policy.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
