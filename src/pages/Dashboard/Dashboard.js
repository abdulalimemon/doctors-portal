import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
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
                        <h2 className='text-black text-3xl font-semibold text-center py-5'>Welcome to your Dashboard</h2>
                        <Outlet></Outlet>


                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <div className='menu p-4 w-11/12 md:w-80 xl:w-60 bg-slate-600'>
                            <div className='flex flex-row justify-end'>
                                <div className='basis-4/5'>
                                    <ul className="text-slate-200 font-semibold text-lg">

                                        <li><Link to=''>Sidebar Item 1</Link></li>
                                        <li><Link to=''>Sidebar Item 2</Link></li>
                                    </ul>
                                </div>
                                <div className='basis-1/5'>
                                    <label htmlFor="my-drawer-2" className="btn btn-circle drawer-button lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </label>
                                </div>
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