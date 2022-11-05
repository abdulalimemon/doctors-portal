import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footerBg">
            <div className="container px-5 pt-16 pb-8 mx-auto">
                <div className="flex flex-wrap md:text-left text-center">
                    <div className="md:w-1/3 w-full px-4">
                        <h2 className="font-semibold text-accent text-lg mb-3">SERVICES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="font-semibold  text-base hover:text-primary">Emergency Checkup</Link>
                            </li>
                            <li>
                                <Link className="font-semibold  text-base hover:text-primary">Monthly Checkup</Link>
                            </li>
                            <li>
                                <Link className="font-semibold  text-base hover:text-primary">Weekly Checkup</Link>
                            </li>
                            <li>
                                <Link className="font-semibold  text-base hover:text-primary">Deep Checkup</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="md:w-1/3 w-full px-4">
                        <h2 className="font-semibold  text-accent text-lg mb-3">ORAL HEALTH</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="font-semibold  text-base hover:text-primary">Fluoride Treatment</Link>
                            </li>
                            <li>
                                <Link className="font-semibold  text-base hover:text-primary">Cavity Filling</Link>
                            </li>
                            <li>
                                <Link className="font-semibold  text-base hover:text-primary">Teath Whitening</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="md:w-1/3 w-full px-4">
                        <h2 className="font-semibold text-accent text-lg mb-3">OUR ADDRESS</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <p className="font-semibold text-accent text-base mb-3">New York - 101010 Hudson</p>
                            </li>
                        </nav>
                    </div>
                </div>
                <div className="px-5 pt-6 text-center">
                    <p className="text-lg text-accent font-semibold mt-4">
                        Copyright 2022 All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;