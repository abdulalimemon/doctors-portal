import React from 'react';

const Service = ({service}) => {
    const {name, slots} = service;

    return (
        <div className="card w-max-lg bg-base-100 rounded-lg shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-semibold text-secondary pb-2">{name}</h2>
                <h4 className='text-center text-sm font-semibold pb-1'>{slots[0]}</h4>
                <p className='text-center text-sm font-semibold pb-2'>{slots.length} {slots.length >1 ? 'SPACES' : 'SPACE' } AVAILABLE</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;