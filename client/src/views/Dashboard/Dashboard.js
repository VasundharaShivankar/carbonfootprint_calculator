import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.js'
import Flightdetails from './../Dashboard/components/flightdetails/flightdetails.js'
import Navbar from '../../components/Navbar/Navbar.js';


function Dashboard() {

  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("email");
  const profile = localStorage.getItem("userPhoto");

  //Random Phone Number
  function generateRandomMobileNumber() {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  
    const formattedNumber = `+91 ${randomNumber.toString().substring(0, 3)} ${randomNumber.toString().substring(3, 6)} ${randomNumber.toString().substring(6)}`;
  
    return formattedNumber;
  }

  const randomMobileNumber = generateRandomMobileNumber();

  // Random birth date

  function generateRandomBirthdate() {
    
    const currentYear = new Date().getFullYear();
    const minBirthYear = currentYear - 99;
    const maxBirthYear = currentYear - 10;
    const randomBirthYear = Math.floor(Math.random() * (maxBirthYear - minBirthYear + 1)) + minBirthYear;
  
    
    const randomBirthMonth = Math.floor(Math.random() * 12) + 1;
  
    
    const daysInMonth = new Date(randomBirthYear, randomBirthMonth, 0).getDate();
    const randomBirthDay = Math.floor(Math.random() * daysInMonth) + 1;
  
    
    const formattedBirthdate = `${randomBirthMonth.toString().padStart(2, '0')}/${randomBirthDay.toString().padStart(2, '0')}/${randomBirthYear}`;
  
    return formattedBirthdate;
  }
  
  const randomBirthdate = generateRandomBirthdate();

  // flight details
  
  return (

    <div>
      <Navbar/>
      <div className='user-dashboard mt-5'>
        <div className='empty mt-3'>

        </div>
   <div className='d-flex justify-content-center '>
   <img src={profile} className='profile rounded-circle ' />
   </div>
        <p className='username'>Hii !! {name}..</p>
        <p className='user-detail' >
          <table>
            <tr> <td> Name : <span className='span'>{name} </span></td></tr>
            <tr><td>Location : <span className='span'>India</span> </td></tr>
            <tr>Email : <span className='span'> {email}</span> </tr>
            <tr>Mobile : <span className='span'>{randomMobileNumber}</span> </tr>
            <tr>DOB : <span className='span'> {randomBirthdate}</span> </tr>
          </table>
        </p>
      </div>
      <div>
      <div>
        <h4 className='subheading3'>Current list</h4>
      </div>

<div>
  <Flightdetails
  flightname="Air India"
  departurestation="JFK"
  departuretime="13:00"
  arrivalStation="Bombay"
  arrivaltime="15:20"
  Ticketprice="$1300"
  />
</div>
      </div>



      <div className='flight-image'>
        <h1 className='subheading'>Add More Products...</h1>
        <p className='subheading1'>Travel More And Keep Shinig...</p>
        <button type="button" class="btn btn-outline-warning">
        <Link className="nav-link active" aria-current="page" to="/Booking">Add Product</Link></button>
      </div>
      <Footer />
    </div>

  )
}

export default Dashboard
