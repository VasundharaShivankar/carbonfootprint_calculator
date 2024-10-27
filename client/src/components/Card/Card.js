import React from 'react';
import './card.css';
import airplanelogo from './airplane.png';
import trainlogo from './train.png';


function Card(props) {
    const {img,country,place,date,price,description,id}=props;
    let logo;
      if(id===1){
        logo=airplanelogo
      ;
      }
      else if(id===2) {
         logo=trainlogo;
      }

  return (
    <div className="card mycard shadow-md ">
      <img src={img} className="card-img-top image" alt="Card  cap" />
      <div className="card-body">
        <h1 className="card-title">{country}</h1>
        
        <img src={logo} className='logo' ></img>
        <p className='place'>{place}</p>
       
        <p className="date">{date}</p>
        <p className='describe mt-4 mb-1 fw-semibold'>{description}</p>
        <button className='btn btn-outline-info mybtn '>{price}</button>
      </div>
    </div>
    );
}

export default Card;
