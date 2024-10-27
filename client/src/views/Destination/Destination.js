import React from 'react';
import { useParams } from 'react-router-dom';
import bookingData from '../../configs/Booking/Transport.json';
import './destination.css';
import Card from '../../components/Card/Card';
import { Infoplane, Infotrain } from '../../configs/Info/Info';
import BookingForm from '../../components/BookingForm/BookingForm';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'


export default function Destination() {
    const { id } = useParams();
    const booking = bookingData.find(item => item.id === id);

    if (!booking) {
        return <div>Booking not found</div>;
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid p-0 position-relative mt-5">
                <img src={booking.poster} alt="Poster " className="img-fluid w-100 " style={{ height: '570px', filter: 'brightness(70%)' }} />
                <div className="position-absolute top-0 start-50 mt-5 translate-middle-x text-center text-white">
                    <h1 className="mb-4">{booking.tag}</h1>
                    <p>{booking.description}</p>
                </div>
            </div>
            <BookingForm  id={parseInt(booking.id)}></BookingForm>
            
            <div className="mt-5 text-center">
                <h2 className="mt-5  text-info-emphasis">Top {booking.transport} Deals From India:</h2>
            </div>

            <div className="container mt-3 ml-5">
                <div className="row d-flex justify-content-center">
                    {
                        id === '1' && Infoplane.map((info, index) => {
                            const { img, country,place, date, price,description,id } = info;
                            return (
                                <div key={index} className="col-md-4 mb-3  d-flex">
                                
                                    <Card img={img} country={country} place={place} date={date} price={price} description={description}  id={parseInt(id)}/>
                
                                </div>)
                        })
                    }
                    {
                        id === '2' && Infotrain.map((info, index) => {
                            const { img, country,place, date, price,description,id } = info;
                            return (
                                <div key={index} className="col-md-4 mb-3 d-flex">
                                    <Card img={img} country={country} place={place} date={date} price={price} description={description} id={parseInt(id)}/>
                                </div>)
                        })

                    }
                </div>
            </div>

            <div className="container col-xxl-12 px-4 py-5  mx-auto">
                <div className="mx-auto d-flex">
                    <div className="col-10 col-sm-8 col-lg-8 border rounded-2 p-3">
                        <h2 className=' text-info-emphasis'>{booking.title}</h2>
                        <p className='lh-base details'>{booking.details}</p>
                    </div>
                    <div>
                        <img src={booking.img} alt="Transport" className="img-fluid rounded-2 border transport-img" />
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
}