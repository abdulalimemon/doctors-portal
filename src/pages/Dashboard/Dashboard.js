import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content py-5 px-5 md:px-10">
                        <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden"><span className='mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </span> Menu</label>
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <div className='menu p-4 lg:p-0 lg:py-4 w-9/12 md:w-80 xl:w-60 bg-slate-600'>
                            <div className='flex justify-between items-center lg:hidden'>
                                <h3 className="text-slate-200 font-semibold text-lg">Menu</h3>
                                <label htmlFor="my-drawer-2" className="w-9 h-9 bg-slate-200 lg:hidden flex justify-center items-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </label>
                            </div>
                            <div>
                                <ul className="text-slate-200 font-semibold text-md xl:text-lg">
                                    <li className='hover:border-r-4 hover:border-green-600'><Link to='/dashboard'>Dashboard</Link></li>
                                    <li className='hover:border-r-4 hover:border-green-600'><Link to='/dashboard/myappointment'>Appointment</Link></li>
                                    <li className='hover:border-r-4 hover:border-green-600'><Link to='/dashboard/review'>Review</Link></li>
                                    {
                                        admin && <li className='hover:border-r-4 hover:border-green-600'><Link to='/dashboard/users'>All Users</Link></li>
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;