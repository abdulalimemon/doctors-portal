import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }

    }, [user]);

    return (
        <div>
            <h2 className='py-5 lg:pt-0 text-2xl text-center font-semibold'>My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full table-compact">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.slot}</td>
                            <td>{appointment.treatmentName}</td>
                        </tr> )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;