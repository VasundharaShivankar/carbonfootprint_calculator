import React from "react";
import TrainDetails from "./components/TrainDetails/TrainDetails";

const TimeSlot = () => {
  
  return (
    <div>
      <h2 className="heading">TimeSlot</h2>
      
      <TrainDetails
      trainName="12890 NAGPUR EXPRESS"
      runsOn="S M T W T F S Mail/Express (12779 Running Status)"
      departureStation="PUNE"
      departureTime="04:30"
      departureDate="Sat, 6 Apr"
      arrivalStation="NAGPUR"
      arrivalTime="08:30"
      arrivalDate="Sat, 6 Apr"
      />
      <TrainDetails
      trainName="1450 KOLHAPUR EXPRESS"
      runsOn="S M T W T F S Mail/Express (12779 Running Status)"
      departureStation="PUNE"
      departureTime="05:00"
      departureDate="Wed, 10 Apr"
      arrivalStation="KOLHAPUR"
      arrivalTime="09:00"
      arrivalDate="Wed, 10 Apr"
      />
    </div>
  );
};

export default TimeSlot;
