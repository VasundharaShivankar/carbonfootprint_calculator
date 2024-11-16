import React, { useState, useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios'; 
import { auth } from "../../views/Login/config";
import toast from 'react-hot-toast';
import home from "./home.png"
import calculator from "./calculator.png"
import community from "./community.png"
import contact from "./contact.png"
import signup from "./sign-up.png"
import "./Navbar.css"

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      // ... (existing code to send API request)
  
      localStorage.clear();
      await auth.signOut();
      toast.success('Logged out successfully');
      window.location.reload();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  
  // const handleLogout = async () => {
  //   try {
      
  //     const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/logout`,
  //     { email: user.email });

  //     toast.success(response.data.message)


  //     localStorage.clear();

  //     await auth.signOut();

  //   } catch (error) {
  //     console.error("Error logging out:", error);
    
  //   }
  // };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg py-3" style={{backgroundColor: "#fff3cd"}} >
      <img></img>
        <div className="container-fluid navsize">
          <Link className="navbar-brand" to="/calculator"><img src={calculator} className="navbar-icon" style={{marginLeft:"10px"}}></img><br/>Calculator</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{marginLeft:"20px"}}>
                <Link className="navbar-brand" aria-current="page" to="/"><img src={home} className="navbar-icon"></img><br/>Home</Link>
              </li>
              <li className="nav-item"   style={{marginLeft:"20px"}}>
                <Link className="navbar-brand" aria-current="page" to="/review"><img src={community} className="navbar-icon"   style={{marginLeft:"44px"}}></img><br/>Community Forum</Link>
              </li>
              <li className="nav-item"  style={{marginLeft:"20px"}}>
                <Link className="navbar-brand" aria-current="page" to="/contact"><img src={contact} className="navbar-icon"  style={{marginLeft:"16px"}}></img><br/>Contact Us</Link>
              </li>
              <li className="nav-item"  style={{marginLeft:"20px"}}>
                <Link className="navbar-brand" aria-current="page" to="/signup"><img src={signup} className="navbar-icon"  style={{marginLeft:"4px"}}></img><br/>Sign Up</Link>
              </li>
              

              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Booking
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/destination/1">Aeroplane</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/destination/2">Train</Link></li>
                </ul>
              </li> */}

            </ul>
            {user ? (
              <div className="d-flex align-items-center  ">
                <Link to="/dashboard" className='text-decoration-none'>
                  <img src={user.photoURL} alt="Profile" className="rounded-circle me-2" style={{ width: '32px', height: '32px' }} />
                  <span className="text-dark me-2">{user.displayName}</span>
                </Link>
                <button onClick={handleLogout} className="btn btn-dark border text-white" type="button">Logout</button>
              </div>
            ) : (
              <Link to='/login' className="text-decoration-none">
                <button className="btn bg-warning border text-black py-1" type="button" style={{width:"90px"}}>LOGIN</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
