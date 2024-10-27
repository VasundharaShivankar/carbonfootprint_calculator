import React, { useState } from 'react';
import AUsers from './components/AUsers';
import ABookings from './components/ABookings';
import AContactUs from './components/AContactUs';
import AReviews from './components/AReviews';

export default function Admin() {
  const [activeComponent, setActiveComponent] = useState(null); // Initially no component selected

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Users':
        return <AUsers />;
      case 'Bookings':
        return <ABookings />;
      case 'ContactUs':
        return <AContactUs />;
      case 'Reviews':
        return <AReviews/>;
      default:
        return <DefaultComponent />; // Render default component if none selected
    }
  };

  const DefaultComponent = () => {
    return (
      <div className="default-component">
        <h3>Welcome to Admin Panel</h3>
        <p>Please select a component to view details.</p>
      </div>
    );
  };

  return (
    <div className="container mt-5">
      
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-5 py-3">Admin Page</h1>
          <div className="d-flex justify-content-center align-items-center mb-4">
            {/* <h5 className="mb-0">Navigate to:</h5> */}
            <div className="component-bar">
              <button
                className={`btn btn-outline-info ${activeComponent === 'Users' && 'active'}`}
                onClick={() => setActiveComponent('Users')}
              >
                Users
              </button>
              <button
                className={`btn btn-outline-info mx-3 ${activeComponent === 'Bookings' && 'active'}`}
                onClick={() => setActiveComponent('Bookings')}
              >
                Bookings
              </button>
              <button
                className={`btn btn-outline-info ${activeComponent === 'ContactUs' && 'active'}`}
                onClick={() => setActiveComponent('ContactUs')}
              >
                Contact Us
              </button>
              <button
                className={`btn btn-outline-info mx-3 ${activeComponent === 'Reviews' && 'active'}`}
                onClick={() => setActiveComponent('Reviews')}
              >
                Reviews
              </button>
            </div>
          </div>
          <hr />
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}
