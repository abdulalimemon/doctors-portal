import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl text-secondary">Booking for : {name}</h3>
                    <div className='pt-5'>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2'>
                            <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full" />
                            <select name='slot' className="select select-bordered w-full">
                                {
                                    slots.map(slot => <option value={slot}>{slot}</option>)
                                }
                            </select>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full" />
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered w-full" />
                            <input type="text" name='phone' placeholder="Your phone number" className="input input-bordered w-full" />
                            <input type="submit" placeholder="Submit" className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;