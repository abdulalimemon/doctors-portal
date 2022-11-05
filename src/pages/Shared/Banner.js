import React from 'react';

const Banner = ({img, title, description, backgroundImage, display, height, marginLeft}) => {
   
    return (
        <div className={`hero py-10 lg:py-16 ${backgroundImage}`}>
            <div className={`hero-content lg:mt-0 ${display}`}>
                <img src={img} className={`mt-3 ${height} rounded-lg shadow-2xl`} alt='Banner' />
                <div className={`${marginLeft}`}>
                    <h2 className="text-3xl mt-5 lg:mt-0 lg:text-5xl font-bold text-accent">{title}</h2>
                    <p className="py-6">{description}</p>
                    <button className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;