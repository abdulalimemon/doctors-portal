import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';



const AvailableServices = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [services]);

    return (
        <div className='container mx-auto py-10 lg:py-16 pt-10'>
            <div className='text-center'>
                <h4 className='text-secondary text-2xl md:text-3xl font-semibold'>Available Services on {format(date, 'PP')}</h4>
                <h2 className='text-lg md:text-xl font-medium'>Please select a service.</h2>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 md:px-1'>
                    {
                        services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>
                        )
                    }
                </div>
                {
                    treatment && <BookingModal 
                    date={date} 
                    treatment={treatment}
                    setTreatment={setTreatment}></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableServices;