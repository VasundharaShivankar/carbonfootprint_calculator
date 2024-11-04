import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'; 
import img1 from './img3.png';
import img2 from './img2.png';
import img3 from './img1.jpg';
import img4 from './img4.png';
import img5 from './Earth.webp';
import img6 from './env.webp';
import img7 from './CarbonFootprint.jpg';
import './Login.css';

import { auth, provider } from "./config";
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const [value, setValue] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // const [email, setEmail] = useState(localStorage.getItem("email"));
  // const [userName, setUserName] = useState(localStorage.getItem("userName"));
  // const [userPhoto, setPhotoURL] = useState(localStorage.getItem("userPhoto"));

  const handleLogin = () => {
    signInWithPopup(auth, provider).then(async (data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("userName", data.user.displayName);
      localStorage.setItem("userPhoto", data.user.photoURL);
      setLoggedIn(true);
  
      // Send user data directly in the POST request
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user`, {
        email: data.user.email,
        userName: data.user.displayName,
        userPhoto: data.user.photoURL
      });

      toast.success(response.data.message);
  
      console.log('User Data Recorded:', response.data);
    });
  };
  

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  console.log(value);
  

  if (loggedIn) {
    return <Navigate to="/dashboard" replace={true} />; 
    // windows.location.href("/")
    
  }

  return (
    <body className='body'>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5 mb-5">
        <div className="row align-items-center g-lg-5 py-5 mb-5">
          <div className="col-lg-6 text-center text-lg-start">
            <img src={img5} alt='img'  style={{ height: "234px" }} className='box' />
            <hr className='my-0 mb-4'/>
            <h1 className=" fw-bold lh-1 text-body-emphasis mb-3 mx-5">Visit Now</h1>
            <p className="col-lg-10 fs-6 ">Enjoy Your seamless experience by signing up now!! </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5 box">
            <form className="p-3 p-md-5 border rounded-3 bg-body-tertiary">
            <img src={img3} alt='img' style={{ height: "164px" }} className='loginimg'/>
              <button onClick={handleLogin} className="w-75 mx-auto btn border-info mt-2 btn-md border d-flex " type="button">
                <img className="icon mx-3 " src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="Google Icon" style={{ height: "24px" }} />
                Sign in with Google
              </button>

              <hr className="my-4" />
              <small className="text-body-secondary">By signing in, you agree to the terms of use.</small>
            </form>
          </div>
        </div>
      </div>
      
    </body>
  )
}

export default Login;
