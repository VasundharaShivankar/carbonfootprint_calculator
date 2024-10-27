import React from 'react'

import airline1 from './../../airline1.png';
import airline2 from './../../airline2.png';
import airline3 from './../../airline3.png';
import airline4 from './../../airline4.png';
import Arrow from './../../arrow.png'
import './flightdetails.css' 

const flightdetails = (props) =>{
   const {flightname,departurestation,departuretime , arrivaltime, arrivalStation,Ticketprice} = props;
   
  return (
    <div>
        flightdetails
      <div className='flight-card'>
        <p>
          <img src={airline1} className='flight-logo' />
          <h4>{flightname}</h4>
        </p>
        <p>
          <p className='station-name'>{departurestation}</p>
          <p className='flight-time'>{departuretime}</p>
        </p>
        <p>
          <p className='middle-para'>Air India</p>
          <p className='middle-para'>Non-Stop</p>
          <img src={Arrow}  className='arrow'/>
        </p>
        <p>
          <p className='station-name'>{arrivalStation}</p>
          <p className='flight-time'>{arrivaltime}</p>
        </p>
        <p>
         {Ticketprice}
        </p>
        <button className='cancel-btn' onClick={'dleteFlight'} > ✖ Cancel</button>
      </div>

    
      <div className='flight-card'>
        <p>
        <img src={airline2} className='flight-logo ' />
        <h4>IndiGo</h4>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'>IndiGo</p>
          <p className='middle-para'>Non-Stop</p>
          <img src={Arrow}  className='arrow'/>
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'>14:20</p>
        </p>
        <p>
          $1450
        </p>
        <button className='cancel-btn' onClick={'CancelFlight'} >✖ Cancel</button>
      </div>


      <div className='flight-card'>
        <p>
        <img src={airline3} className='flight-logo' />
        <h4>Spice jet</h4>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'>Spice jet</p>
          <p className='middle-para'>Non-Stop</p>
          <img src={Arrow}  className='arrow'/>
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'>14:20</p>
        </p>
        <p>
          $2000
        </p>
        <button className='cancel-btn' onClick={'CancelFlight'}> ✖ Cancel</button>
      </div>


      <div className='flight-card'>
        <p>
        <img src={airline4} className='flight-logo' />
        <h4>Vistara</h4>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'>Vistara</p>
          <p className='middle-para'>Non-Stop</p>
          <img src={Arrow}  className='arrow'/>
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'>14:20</p>
        </p>
        <p>
          $2300
        </p>
        <button className='cancel-btn' onClick={'CancelFlight'} > ✖ Cancel</button>
      </div>
      </div>
   
  )
}

export default flightdetails
