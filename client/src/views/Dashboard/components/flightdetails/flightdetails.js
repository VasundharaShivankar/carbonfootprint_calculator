import React from 'react'

import f1 from './../../f1.jpg';
import f2 from './../../f2.jpg';
import f3 from './../../f3.webp';
import f4 from './../../f4.jpg';
import Arrow from './../../arrow.png'
import './flightdetails.css' 

const flightdetails = (props) =>{
   const {flightname,departurestation,departuretime , arrivaltime, arrivalStation,Ticketprice} = props;
   
  return (
    <div className='products'>
        PRODUCTS 
      <div className='flight-card'>
        <p>
          <img src={f1} className='flight-logo' />
          <h4>Pio Salt</h4>
        </p>
        <p>
          <p className='station-name'>{departurestation}</p>
          <p className='flight-time'>{departuretime}</p>
        </p>
        <p>
          <p className='middle-para'>PIO SALT</p>
          <p className='middle-para'>Fertilizer</p>
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
        <img src={f2} className='flight-logo ' />
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
        <img src={f3} className='flight-logo' />
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
        <img src={f4} className='flight-logo' />
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
