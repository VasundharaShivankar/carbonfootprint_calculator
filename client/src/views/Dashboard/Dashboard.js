import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Flightdetails from './../Dashboard/components/flightdetails/flightdetails.js';

function Dashboard() {
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("email");
  const profile = localStorage.getItem("userPhoto");

  // Active Users
  const activeUsers = 1200;

  // Predictive Analytics Example
  const carbonFootprintData = [
    { year: 2024, emission: 150 },
    { year: 2025, emission: 140 },
    { year: 2026, emission: 130 },
    { year: 2027, emission: 120 },
  ];

  return (
    <div className="mainbody">
      <Navbar />
      <div className="user-dashboard">
        <div className="d-flex justify-content-center">
          <img src={profile} className="profile rounded-circle" />
        </div>
        <p className="username" style={{color:"tomato"}}>Hello, {name}!</p>
        <p className="user-detail">
          <table style={{justifyContent:"left"}}>
            <tr> <td >Name: <span className="span">{name}</span></td></tr>
            <tr><td>Location: <span className="span">India</span></td></tr>
            <tr><td>Email: <span className="span">{email}</span></td></tr>
          </table>
        </p>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between active-analytics-section my-4">
        {/* Active Users Section */}
        <div className="active-users">
          <h4>Active Users</h4>
          <p>{activeUsers} active users currently on the platform.</p>
          <img src="active-users-img.png" alt="Active Users" className="section-img-left" />
        </div>

        {/* Predictive Analytics for Carbon Emissions */}
        <div className="analytics">
          <h4>Predictive Analysis</h4>
          <p>Estimated carbon footprint reduction over the next few years:</p>
          <ul>
            {carbonFootprintData.map((data, index) => (
              <li key={index}>{data.year}: {data.emission} kg CO2</li>
            ))}
          </ul>
          <img src="predictive-analysis-img.png" alt="Predictive Analytics" className="section-img-right" />
        </div>
      </div>

      <div>
        <Flightdetails
          flightname="Pio Salt"
          departurestation="N/A"
          departuretime="N/A"
          arrivalStation="N/A"
          arrivaltime="N/A"
          Ticketprice="Rs. 599"
        />
      </div>

      <div className="flight-image">
        <h1 className="subheading">Add More Products...</h1>
        <p className="subheading1">Explore More And Enjoy Benefits...</p>
        <button type="button" className="btn btn-outline-warning">
          <Link className="nav-link active" aria-current="page" to="https://www.bighaat.com/?srsltid=AfmBOoqWT3S-rf97379Su9UbUY2vSRNs4PbYaZH8MwZ9v9wlnXsT0Wlo">Add Product</Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
