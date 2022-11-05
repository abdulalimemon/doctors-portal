import React from 'react';
import img from '../../assets/images/doctor.png';



const AppointmentHome = () => {
    return (
        <div className='appointmentBg'>
            <div className='container mx-auto'>
                <div>
                    <div className='flex items-center justify-center'>
                        <img src={img} className='lg:-mt-40 lg:w-8/12 xl:w-1/2 hidden lg:flex' alt='Doctor' />
                        <div className='py-14 px-5' >
                            <h4 className='text-secondary text-lg md:text-xl font-semibold'>Appointment</h4>
                            <h2 className="text-3xl mt-5 lg:mt-0 lg:text-5xl font-bold text-white">Make an appointment Today</h2>
                            <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold">GET STARTED</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHome;