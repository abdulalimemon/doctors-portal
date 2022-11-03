import React from 'react';

const InfoCard = ({img, cardTitle, cardDes, bgClass}) => {
    return (
        <div className={`card lg:card-side shadow-xl rounded-lg p-4 ${bgClass}`}>
            <figure className='ml-3 pt-3 md:pt-0'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title justify-center md:justify-start md:text-2xl">{cardTitle}</h2>
                <p className='text-lg text-center md:text-start'>{cardDes}</p>
            </div>
        </div>
    );
};

export default InfoCard;