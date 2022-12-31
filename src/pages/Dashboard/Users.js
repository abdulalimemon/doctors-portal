import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';
import Loading from '../Shared/Loading';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://doctors-portal-server-0ji0.onrender.com/user`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div>
            <h2 className='py-5 lg:pt-0 text-2xl text-center font-semibold'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full table-compact	">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow user={user} key={user._id} index={index} refetch={refetch}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;