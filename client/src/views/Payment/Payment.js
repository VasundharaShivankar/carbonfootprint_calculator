import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    billingAddress: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    departureDate: '',
    returnDate: '',
    departureLocation: '',
    arrivalLocation: '',
    numberOfAdults: 1,
    numberOfChildren: 0,
    numberOfInfants: 0,
    seatPreference: 'No Preference',
    mealPreference: 'No Preference',
    frequentFlyerNumber: '',
    promoCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server, process payment)
    console.log(formData);
  };

  return (
    <div className="container mt-5 bg-white p-4 rounded">
      <h2 className="text-center">Payment Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="tel"
            className="form-control"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Billing Address</label>
          <textarea
            className="form-control"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Payment Information */}
        <h3 className="mt-4">Payment Information</h3>
        <div className="mb-3">
          <label className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Expiration Date</label>
          <input
            type="text"
            className="form-control"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">CVV</label>
          <input
            type="text"
            className="form-control"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cardholder Name</label>
          <input
            type="text"
            className="form-control"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Booking Details */}
        <h3 className="mt-4">Booking Details</h3>
        <div className="mb-3">
          <label className="form-label">Departure Date</label>
          <input
            type="date"
            className="form-control"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Return Date</label>
          <input
            type="date"
            className="form-control"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Departure Location</label>
          <input
            type="text"
            className="form-control"
            name="departureLocation"
            value={formData.departureLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Arrival Location</label>
          <input
            type="text"
            className="form-control"
            name="arrivalLocation"
            value={formData.arrivalLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Adults</label>
          <input
            type="number"
            className="form-control"
            name="numberOfAdults"
            value={formData.numberOfAdults}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Children</label>
          <input
            type="number"
            className="form-control"
            name="numberOfChildren"
            value={formData.numberOfChildren}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Infants</label>
          <input
            type="number"
            className="form-control"
            name="numberOfInfants"
            value={formData.numberOfInfants}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Seat Preference</label>
          <select
            className="form-select"
            name="seatPreference"
            value={formData.seatPreference}
            onChange={handleChange}
          >
            <option value="No Preference">No Preference</option>
            <option value="Window">Window</option>
            <option value="Aisle">Aisle</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Meal Preference</label>
          <select
            className="form-select"
            name="mealPreference"
            value={formData.mealPreference}
            onChange={handleChange}
          >
            <option value="No Preference">No Preference</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Special Meal">Special Meal</option>
          </select>
        </div>

        {/* Optional Information */}
        <h3 className="mt-4">Optional Information</h3>
        <div className="mb-3">
          <label className="form-label">Frequent Flyer Number</label>
          <input
            type="text"
            className="form-control"
            name="frequentFlyerNumber"
            value={formData.frequentFlyerNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Promo Code</label>
          <input
            type="text"
            className="form-control"
            name="promoCode"
            value={formData.promoCode}
            onChange={handleChange}
          />
        </div>

        {/* Terms and Conditions */}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="termsAndConditions" required />
          <label className="form-check-label" htmlFor="termsAndConditions">
            I agree to the <a href="/terms" className="link-primary">Terms and Conditions</a>
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;
