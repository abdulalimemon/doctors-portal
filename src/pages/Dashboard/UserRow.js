import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://doctors-portal-server-0ji0.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to made an admin.', {
                        theme: "colored",
                    });
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Made An admin.', {
                        theme: "colored",
                    });
                    refetch();
                }
            });
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-sm capitalize bg-green-800 text-white border-0">Make Admin</button>} {role === 'admin' && <p>Admin</p>}</td>
            <td><button className="btn btn-sm capitalize text-white border-0 bg-red-700">Remove User</button></td>
        </tr>
    );
};

export default UserRow;