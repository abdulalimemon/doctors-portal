import React from 'react';
import { useState } from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import AppointmentBanner from './AppointmentBanner';
import AvailableServices from './AvailableServices';


const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableServices date={date}></AvailableServices>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;