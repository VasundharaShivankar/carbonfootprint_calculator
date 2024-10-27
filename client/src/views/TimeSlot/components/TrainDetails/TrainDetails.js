import React from 'react'
import RightArrow from './right-arrow.png'
import "./TrainDetails.css";

const TrainDetails = (props) => {
    const { trainName, runsOn, departureStation, departureTime, departureDate, arrivalStation, arrivalTime, arrivalDate } = props;
  return (
    <div className=" container container-1 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="train-info">
          <div className="train-name text-info">
            {trainName}
            <p className="info">
              Runs on: {runsOn}
            </p>
          </div>

          <div className="train-time">
            <p>
              <p className="text-info">{departureStation}</p>
              <p>{departureTime}</p>
              <p>{departureDate}</p>
            </p>
            <img src={RightArrow} alt="" className="arrow-img" />
            <p>
              <p className="text-info">{arrivalStation}</p>
              <p>{arrivalTime}</p>
              <p>{arrivalDate}</p>
            </p>
          </div>
          <button type="button" class="book-train-btn">Book Train</button>

        </div>
      </div>
  )
}

export default TrainDetails