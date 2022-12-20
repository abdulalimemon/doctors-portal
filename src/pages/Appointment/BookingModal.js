import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const BookingModal = ({ date, treatment, setTreatment,refetch }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatmentName: name,
            date: formattedDate,
            slot,
            patientEmail: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {  
                if (data.success) {
                    toast.success(`Appointment is set on ${formattedDate} at ${slot}`, {
                        theme: "colored",
                    });
                } else {
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`, {
                        theme: "colored",
                    });
                }

                // to close the modal
                refetch();
                setTreatment(null);
            })
    };

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
                                    slots.map((slot, index) => <option value={slot} key={index}>{slot}</option>)
                                }
                            </select>
                            <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full" />
                            <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full" />
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