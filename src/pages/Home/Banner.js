import React from 'react';
import bannerBg from '../../assets/images/chair.png';



const Banner = () => {
   
    return (
        <div className="hero min-h-screen bannerBg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerBg} className="mt-3 lg:mt-0 lg:w-1/2 rounded-lg shadow-2xl" alt='Banner' />
                <div>
                    <h2 className="text-3xl mt-5 lg:mt-0 lg:text-5xl font-bold text-accent">Your New Smile Starts Here</h2>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;