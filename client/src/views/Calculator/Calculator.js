import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'; 
import './Calculator.css';

function Calculator() {
  // State variables for user inputs
  const [electricity, setElectricity] = useState('');
  const [gas, setGas] = useState('');
  const [transportation, setTransportation] = useState('');
  const [food, setFood] = useState('');
  const [waste, setWaste] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  // Function to calculate carbon footprint
  const calculateCarbonFootprint = (e) => {
    e.preventDefault();

    // Convert inputs to numbers and calculate (example coefficients used for simplicity)
    const electricityCarbon = electricity * 0.92; // CO2 per kWh (example coefficient)
    const gasCarbon = gas * 1.92; // CO2 per therm (example coefficient)
    const transportationCarbon = transportation * 0.23; // CO2 per mile (example coefficient)
    const foodCarbon = food * 0.02; // CO2 per meal (example coefficient)
    const wasteCarbon = waste * 0.5; // CO2 per kg of waste (example coefficient)

    // Calculating total carbon footprint
    const totalCarbonFootprint = electricityCarbon + gasCarbon + transportationCarbon + foodCarbon + wasteCarbon;

    setCarbonFootprint(totalCarbonFootprint);
  };

  return (
    <div className="calculator-container">
      <h1>Carbon Footprint Calculator</h1>
      <form onSubmit={calculateCarbonFootprint}>
        <div className="form-group">
          <label htmlFor="electricity">Electricity (kWh):</label>
          <input
            type="number"
            id="electricity"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gas">Gas Usage (therms):</label>
          <input
            type="number"
            id="gas"
            value={gas}
            onChange={(e) => setGas(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="transportation">Transportation (miles driven):</label>
          <input
            type="number"
            id="transportation"
            value={transportation}
            onChange={(e) => setTransportation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="food">Food Consumption (meals):</label>
          <input
            type="number"
            id="food"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="waste">Waste Produced (kg):</label>
          <input
            type="number"
            id="waste"
            value={waste}
            onChange={(e) => setWaste(e.target.value)}
          />
        </div>

        <button type="submit">Calculate Carbon Footprint</button>
      </form>

      {carbonFootprint !== null && (
        <div className="result">
          <h2>Total Carbon Footprint: {carbonFootprint.toFixed(2)} kg CO2</h2>
        </div>
      )}
    </div>
  );
}

export default Calculator;
