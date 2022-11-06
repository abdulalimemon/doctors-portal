import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card w-max-lg bg-base-100 rounded-lg shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-semibold text-secondary pb-2">{name}</h2>
                <h4 className='text-center text-sm font-semibold pb-1'>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another day</span>}</h4>
                <p className='text-center text-sm font-semibold pb-2'>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)} >Book Appointment</label >
                </div>
            </div>
        </div>
    );
};

export default Service;