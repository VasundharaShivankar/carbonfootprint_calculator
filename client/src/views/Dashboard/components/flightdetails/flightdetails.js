import React from 'react'

import f1 from './../../f1.jpg';
import f2 from './../../f2.jpg';
import f3 from './../../f3.webp';
import f4 from './../../f4.jpg';
import Arrow from './../../arrow.png'
import './flightdetails.css' 
import 'bootstrap/dist/css/bootstrap.min.css';

const flightdetails = (props) =>{
   const {flightname,departurestation,departuretime , arrivaltime, arrivalStation,Ticketprice} = props;
   
  return (
    <div className='products'>
        PRODUCTS 
      <div className='p1'>
      <div className='flight-card'>
        <p>
          <img src={f1} className='flight-logo' />
          <h4 className='name'>Pio Salt</h4><hr/>
        </p>
        <p>
          <p className='station-name'>{departurestation}</p>
          <p className='flight-time'>{departuretime}</p>
        </p>
        <p>
          <p className='middle-para'><u>CONTACT</u></p>
          <p className='middle-para'>+91 974352783</p>
          {/* <img src={Arrow}  className='arrow'/> */}
        </p>
        <p>
          <p className='station-name'>{arrivalStation}</p>
          <p className='flight-time'>{arrivaltime}</p>
        </p>
        <p>
         {/* {Ticketprice} */}
         Rs.599
        </p>
        <button type="button" class="btn btn-outline-warning" onClick={'CancelFlight'} >✖ Cancel</button>
        </div>

    
      <div className='flight-card'>
        <p>
        <img src={f2} className='flight-logo ' />
        <h4 className='name'>COMPO</h4><hr/>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'><u>CONTACT</u></p>
          <p className='middle-para'>+91 9673875612</p>
          {/* <img src={Arrow}  className='arrow'/> */}
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'></p>
        </p>
        <p>
        Rs.599
        </p>
        <button type="button" class="btn btn-outline-warning" onClick={'CancelFlight'} >✖ Cancel</button>
      </div>


      <div className='flight-card'>
        <p>
        <img src={f3} className='flight-logo' />
        <h4 className='name'>Spice jet</h4><hr/>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'><u>CONTACT</u></p>
          <p className='middle-para'>+91 9456732522</p>
          {/* <img src={Arrow}  className='arrow'/> */}
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'></p>
        </p>
        <p>
        Rs.599
        </p>
        <button type="button" class="btn btn-outline-warning" onClick={'CancelFlight'} >✖ Cancel</button>
      </div>


      <div className='flight-card'>
        <p>
        <img src={f4} className='flight-logo' />
        <h4 className='name'>Vistara</h4><hr/>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'><u>CONTACT</u></p>
          <p className='middle-para'>+91 9777434323</p>
          {/* <img src={Arrow}  className='arrow'/> */}
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'></p>
        </p>
        <p>
        Rs.599
        </p>
        <button type="button" class="btn btn-outline-warning" onClick={'CancelFlight'} >✖ Cancel</button>
      </div>
    </div>

    <div className='flight-card'>
        <p>
        <img src={f3} className='flight-logo' />
        <h4 className='name'>Spice jet</h4><hr/>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'><u>CONTACT</u></p>
          <p className='middle-para'>+91 9943527612</p>
          {/* <img src={Arrow}  className='arrow'/> */}
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'></p>
        </p>
        <p>
        Rs.599
        </p>
        <button type="button" class="btn btn-outline-warning" onClick={'CancelFlight'} >✖ Cancel</button>
      </div>
    </div>  
  )
}

export default flightdetails
